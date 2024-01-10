import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'devdreacode@gmail.com',
    pass: 'ttfrhuybsrcmzswl',
  },
});

transporter.verify().then(() => {
  console.log('Ready for send email');
});

export default transporter;
