const nodemailer = require('nodemailer');

const NOTIFICATION_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'amitcse21@gmail.com';

// Configure transporter
let transporter;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
} else if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASS) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS
    }
  });
} else {
  // Graceful fallback logger
  transporter = {
    sendMail: async (mailOptions) => {
      console.log(`📧 [EMAIL TO ${mailOptions.to}] Subject: ${mailOptions.subject}`);
      console.log(`📝 Content Preview: Client ${mailOptions.context?.customerName || ''}, Phone: ${mailOptions.context?.customerPhone || ''}`);
      return { messageId: 'simulated-' + Date.now() };
    }
  };
}

async function sendBookingNotificationEmail(booking) {
  try {
    const customerName = booking.customerName || 'VIP Client';
    const customerPhone = booking.customerPhone || 'N/A';
    const customerEmail = booking.customerEmail || 'Not provided';
    const serviceTitle = booking.serviceTitle || 'Makeover & Salon Service';
    const bookingDate = booking.bookingDate || new Date().toISOString().split('T')[0];
    const slotTime = booking.slotTime || 'Flexible Slot';
    const notes = booking.notes || 'No special requests.';
    const bookingId = booking.id || 'BK-' + Date.now();

    const cleanPhone = customerPhone.replace(/[^0-9]/g, '');
    const whatsappLink = `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}`;

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .header { background: #111827; color: #ffffff; padding: 28px 24px; text-align: center; border-bottom: 3px solid #d4af37; }
        .header h1 { margin: 0; font-size: 22px; letter-spacing: 1px; color: #d4af37; text-transform: uppercase; }
        .header p { margin: 6px 0 0 0; font-size: 13px; color: #9ca3af; }
        .body { padding: 28px 24px; color: #374151; }
        .badge { display: inline-block; background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; font-size: 12px; font-weight: bold; padding: 4px 10px; border-radius: 20px; margin-bottom: 16px; }
        .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .info-table td { padding: 10px 12px; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
        .info-table td.label { font-weight: bold; color: #6b7280; width: 35%; }
        .info-table td.value { color: #111827; font-weight: 600; }
        .actions { display: flex; gap: 12px; margin-top: 24px; }
        .btn-wa { background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block; text-align: center; }
        .btn-call { background: #111827; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block; text-align: center; }
        .footer { background: #f9fafb; padding: 16px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>AURA LUXURY STUDIO</h1>
          <p>New Appointment Request • Govindpuri, Modinagar</p>
        </div>
        <div class="body">
          <div class="badge">INSTANT CONFIRMED RESERVATION</div>
          <h2 style="font-size: 18px; margin: 0 0 16px 0; color: #111827;">Appointment Details (#${bookingId})</h2>
          
          <table class="info-table">
            <tr>
              <td class="label">Client Name:</td>
              <td class="value">${customerName}</td>
            </tr>
            <tr>
              <td class="label">Mobile Number:</td>
              <td class="value"><a href="tel:${customerPhone}" style="color: #9a7412; text-decoration: none;">${customerPhone}</a></td>
            </tr>
            <tr>
              <td class="label">Email:</td>
              <td class="value">${customerEmail}</td>
            </tr>
            <tr>
              <td class="label">Service Booked:</td>
              <td class="value" style="color: #9a7412;">${serviceTitle}</td>
            </tr>
            <tr>
              <td class="label">Requested Date:</td>
              <td class="value">${bookingDate}</td>
            </tr>
            <tr>
              <td class="label">Preferred Time:</td>
              <td class="value">${slotTime}</td>
            </tr>
            <tr>
              <td class="label">Client Notes:</td>
              <td class="value">${notes}</td>
            </tr>
          </table>

          <div style="text-align: center; margin-top: 24px;">
            <a href="${whatsappLink}" class="btn-wa" target="_blank">Chat with Client on WhatsApp</a>
            <a href="tel:${customerPhone}" class="btn-call" style="margin-left: 10px;">Call Client</a>
          </div>
        </div>
        <div class="footer">
          Aura Makeup Studio & Salon • Govindpuri, Modinagar • Instant Booking Engine
        </div>
      </div>
    </body>
    </html>
    `;

    const mailOptions = {
      from: '"Aura Luxury Studio Booking" <noreply@auramakeup.com>',
      to: NOTIFICATION_EMAIL,
      subject: `✨ New Appointment: ${customerName} - ${serviceTitle} (${customerPhone})`,
      html: htmlContent,
      context: { customerName, customerPhone, serviceTitle }
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Appointment email notification dispatched to ${NOTIFICATION_EMAIL}: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.warn(`⚠️ Error sending appointment notification email:`, error.message);
    return { success: false, error: error.message };
  }
}

module.exports = {
  sendBookingNotificationEmail,
  NOTIFICATION_EMAIL
};
