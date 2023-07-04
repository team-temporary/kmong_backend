import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  // 6자리 숫자 메일 인증
  async sendVerificationNumberEmail(email: string) {
    try {
      const randomNumber: string = String(
        Math.floor(Math.random() * 100000),
      ).padStart(6, '0');

      await this.mailerService.sendMail({
        to: email,
        from: '',
        subject: '이메일 인증 요청 메일입니다.',
        html: ``,
      });
    } catch (error) {}
  }

  // 버튼 클릭 메일 인증
  async sendVerificationButtonEmail(email: string) {
    try {
      const baseURL = ``;
      const url = ``;

      await this.mailerService.sendMail({
        to: email,
        from: '',
        subject: '이메일 인증 요청 메일입니다.',
        html: ``,
      });
    } catch (error) {}
  }

  async verifyEmail() {}
}
