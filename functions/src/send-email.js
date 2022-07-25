const functions = require("firebase-functions");
const nodemailer = require('nodemailer');

async function verifyTransporter(transporter) {
    return new Promise(resolve => {
        transporter.verify((err) => {
            if (err) resolve({success: false, error: err});
            else resolve({success: true, error: undefined});
        })
    })
}

async function sendMail(transporter, mail) {
    return new Promise(resolve => {
        transporter.sendMail(mail, (err, data) => {
            if (err) resolve({success: false, error: err, data: undefined});
            else resolve({success: true, error: undefined, data});
        });
    })
}

exports.sendEmail = functions
    .runWith({secrets: ["EMAIL_PASSWORD"]})
    .https.onCall(async ({email, subject, message}) => {
        if (!email) return {success: false, error: 'Email is required.', data: undefined};
        if (!subject) return {success: false, error: 'Subject is required.', data: undefined};
        if (!message) return {success: false, error: 'Message is required.', data: undefined};
        

        const text = `From: ${email}\n\n${message}`;

        const mail = {
            from: 'Ross-Alexandra@outlook.com',
            to: 'Ross-Alexandra@outlook.com',
            subject: subject,
            text
        }; 
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp-mail.outlook.com',
                secureConnection: false,
                port: 587,
                tls: {
                    ciphers: 'SSLv3'
                },
                auth: {
                    user: 'Ross-Alexandra@outlook.com',
                    pass: process.env.EMAIL_PASSWORD
                }
            });

            const ready = await verifyTransporter(transporter);
            if (!ready.success) return {success: false, error: ready.error, data: undefined};

            const mailResponse = await sendMail(transporter, mail);
            if (!mailResponse.success) return {
                success: false,
                error: `Failed to send email: ${mailResponse.error}. Please try again later`,
                data: undefined
            };

            return {
                success: true,
                error: undefined,
                data: mailResponse.data
            };
        } catch (err) {
            return {
                success: false,
                error: err,
                data: undefined
            };
        }
    });
