// pages/api/contact.js
import nodemailer from 'nodemailer';

export async function POST(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message, affiliation } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransporter({
      // Option 1: Gmail (most common)
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
      
      // Option 2: Custom SMTP (uncomment if using custom email provider)
      /*
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      */
    });

    // Email to yourself (notification)
    const notificationEmail = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #2563eb; margin: 0;">New Contact Form Submission</h2>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #6b7280;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #6b7280;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${affiliation ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #374151;">Affiliation:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #6b7280;">${affiliation}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #374151;">Subject:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #6b7280;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #374151; vertical-align: top;">Message:</td>
                <td style="padding: 10px 0; color: #6b7280; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Reply directly to this email to respond to ${name}</strong>
            </p>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #9ca3af; font-size: 12px;">
            <p>This message was sent from your portfolio contact form</p>
            <p>Received on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    };

    // Auto-reply to sender (optional but professional)
    const autoReplyEmail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Thank you for contacting Dr. [Your Name] - Message Received`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">Thank You for Your Message</h2>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #374151; line-height: 1.6;">Dear ${name},</p>
            
            <p style="color: #374151; line-height: 1.6;">
              Thank you for reaching out through my portfolio contact form. I have received your message regarding 
              "<strong>${subject}</strong>" and appreciate you taking the time to contact me.
            </p>
            
            <p style="color: #374151; line-height: 1.6;">
              I review all messages personally and will respond within 24-48 hours. If your inquiry is urgent, 
              please feel free to contact me directly at my institutional email.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <h4 style="color: #2563eb; margin: 0 0 10px 0;">Your Message Summary:</h4>
              <p style="color: #6b7280; margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              ${affiliation ? <p style="color: #6b7280; margin: 5px 0;"><strong>Affiliation:</strong> ${affiliation}</p> : ''}
              <p style="color: #6b7280; margin: 5px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              Best regards,<br>
              <strong>Dr. [Your Name]</strong><br>
              <span style="color: #6b7280;">[Your Title]</span><br>
              <span style="color: #6b7280;">[Your Institution]</span>
            </p>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #9ca3af; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(notificationEmail);
    await transporter.sendMail(autoReplyEmail);

    return res.status(200).json({ message: 'Message sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send message' });
  }
}

// Rate limiting helper (optional but recommended)
const rateLimitMap = new Map();

function rateLimit(ip, limit = 5, windowMs = 15 * 60 * 1000) { // 5 requests per 15 minutes
  const now = Date.now();
  const windowStart = now - windowMs;
  
  const requests = rateLimitMap.get(ip) || [];
  const requestsInWindow = requests.filter(time => time > windowStart);
  
  if (requestsInWindow.length >= limit) {
    return false;
  }
  
  requestsInWindow.push(now);
  rateLimitMap.set(ip, requestsInWindow);
  return true;
}
//   </p>s