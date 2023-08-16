const mailer = require('nodemailer');

const sendMailudf  = async (to)=>{

    const transporter = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, // 465 https ...
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'pythonforsamir@gmail.com',
            pass: 'qczmlgyjouvmthrj'
        }
    })

    const mailOptions = {
        from: 'pythonforsamir@gmail.com',
        to: to,
        subject: 'Test Mail',
        text: 'Hello from NodeJS'   
    }

    const info = await transporter.sendMail(mailOptions);
    console.log(info);
}

sendMailudf("samir.vithlani83955gmail.com")