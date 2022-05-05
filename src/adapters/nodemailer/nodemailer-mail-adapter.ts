import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1f011e9d1daf54",
    pass: "74c2b210d20346"
  }
});

export class NodemailerMailerAdapter implements MailAdapter{
   async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Victor Schlindwein <victorwilbert@gmail.com>',
      subject,
      html: body,
    });
  }
}