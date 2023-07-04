import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('')
  async getAuthUser() {}

  @Post('signup')
  async signUp(body) {
    return await this.authService.signUp(body);
  }

  @Post('signin')
  async signIn(body) {
    return await this.authService.jwtSignIn(body);
  }

  @Post('signin/google')
  async signInGoogle() {}

  @Post('signin/kakao')
  async signInLKakao() {}

  @Post('signin/naver')
  async signInNaver() {}

  @Post('google/callback')
  async googleCallback() {}

  @Post('kakao/callback')
  async kakaoCallback() {}

  @Post('naver/callback')
  async naverCallback() {}

  @Get('refresh')
  async refreshTokens() {}

  @Post('sign-out')
  async signOut() {
    return await this.authService.jwtSignOut();
  }

  @Post('email-verify')
  async verifyEmail() {}

  @Post('phone-verify')
  async verifyPhoneNumber() {}
}
