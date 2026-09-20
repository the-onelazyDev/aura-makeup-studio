const https = require('https');
const nodemailer = require('nodemailer');

const NOTIFICATION_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'amitcse21@gmail.com';

// Configure Nodemailer if SMTP credentials exist
let smtpTransporter = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  smtpTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
} else if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASS) {
  smtpTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS
    }
  });
}

// Live HTTP Dispatch Service
async function dispatchLiveEmailNotification(booking) {
  const customerName = booking.customerName || 'VIP Client';
  const customerPhone = booking.customerPhone || 'N/A';
  const customerEmail = booking.customerEmail || 'Not provided';
  const serviceTitle = booking.serviceTitle || 'Makeover & Salon Service';
  const bookingDate = booking.bookingDate || new Date().toISOString().split('T')[0];
  const slotTime = booking.slotTime || '11:00 AM';
  const notes = booking.notes || 'None';
  const cleanPhone = customerPhone.replace(/[^0-9]/g, '');

  const payload = JSON.stringify({
    name: customerName,
    email: customerEmail !== 'Not provided' ? customerEmail : 'noreply@thebeautybar.com',
    _subject: `✨ New VIP Appointment: ${customerName} (${customerPhone}) - ${serviceTitle}`,
    Client_Name: customerName,
    Client_Mobile: customerPhone,
    Client_Email: customerEmail,
    Service_Booked: serviceTitle,
    Appointment_Date: bookingDate,
    Preferred_Time: slotTime,
    Special_Requests_Notes: notes,
    WhatsApp_Chat: `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}`,
    _captcha: 'false',
    _template: 'table'
  });

  const options = {
    hostname: 'formsubmit.co',
    path: `/ajax/${NOTIFICATION_EMAIL}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Origin': 'https://aura-makeup-studio-live.vercel.app',
      'Referer': 'https://aura-makeup-studio-live.vercel.app/',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (c) => { body += c; });
      res.on('end', () => {
        console.log(`📬 Live Email Notification Response (${res.statusCode}):`, body);
        resolve({ success: res.statusCode >= 200 && res.statusCode < 300 });
      });
    });

    req.on('error', (err) => {
      console.warn('⚠️ Direct email dispatch network notice:', err.message);
      resolve({ success: false, error: err.message });
    });

    req.write(payload);
    req.end();
  });
}

async function sendBookingNotificationEmail(booking) {
  try {
    // 1. If SMTP is configured, dispatch via SMTP
    if (smtpTransporter) {
      const htmlContent = `
        <h2>The Beauty Bar Studio - New Appointment</h2>
        <p><strong>Name:</strong> ${booking.customerName}</p>
        <p><strong>Phone:</strong> ${booking.customerPhone}</p>
        <p><strong>Email:</strong> ${booking.customerEmail || 'N/A'}</p>
        <p><strong>Service:</strong> ${booking.serviceTitle}</p>
        <p><strong>Date:</strong> ${booking.bookingDate}</p>
        <p><strong>Time:</strong> ${booking.slotTime}</p>
        <p><strong>Notes:</strong> ${booking.notes}</p>
      `;
      await smtpTransporter.sendMail({
        from: '"The Beauty Bar Studio" <noreply@thebeautybar.com>',
        to: NOTIFICATION_EMAIL,
        subject: `✨ New Appointment: ${booking.customerName} - ${booking.serviceTitle}`,
        html: htmlContent
      });
      console.log(`✅ SMTP Email sent to ${NOTIFICATION_EMAIL}`);
      return { success: true };
    }

    // 2. Dispatch via live HTTP notification to amitcse21@gmail.com
    const result = await dispatchLiveEmailNotification(booking);
    return result;
  } catch (error) {
    console.warn(`⚠️ Email notification handling error:`, error.message);
    return { success: false, error: error.message };
  }
}

module.exports = {
  sendBookingNotificationEmail,
  NOTIFICATION_EMAIL
};
