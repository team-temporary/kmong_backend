import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';
import { JwtAccessPayload } from '../types/jwt-access.payload';
import { JwtRefreshSecretConstant } from '../constants/jwt-refresh-secret.constant';
import { JwtAccessSecretConstant } from '../constants/jwt-access-secret.constant';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(body) {
    try {
      const { nickname, password, email } = body;

      // asdf@naver.com 이메일 형식
      const regExp_email =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      if (!regExp_email.test(email)) {
        throw new UnauthorizedException('이메일형식이 틀립니다.');
      }

      // 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
      const regExp_password =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

      if (!regExp_password.test(password)) {
        throw new UnauthorizedException(
          '비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
        );
      }

      // 닉네임은 영문,숫자,한글로 된 3~10자
      const regExp_nickname = /^(?=.*[a-z0-9가-힣A-Z])[a-z0-9가-힣]{3,15}$/;

      if (!regExp_nickname.test(nickname)) {
        throw new UnauthorizedException(
          '닉네임은 영문,숫자,한글로 된 3~10자입니다.',
        );
      }

      const isEmailExist = await this.usersService.existsByEmail(email);
      if (isEmailExist) {
        throw new UnauthorizedException('해당하는 이메일은 이미 존재합니다.'); // httpexceptionfilter로 넘어감.
      }

      // Hash the users password
      // Generate a salt
      const salt = await bcrypt.genSalt();

      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await this.usersService.save({
        email,
        nickname,
        password: hashedPassword,
        phoneNumber: '123456',
      });

      return user;
    } catch (err) {}
  }

  async jwtSignIn(body) {
    try {
      const { email, password } = body;

      const user = await this.usersService.findOne({ email: email });

      if (!user) {
        throw new UnauthorizedException('아이디와 비밀번호를 확인해주세요.');
      }

      const isHashValid = await bcrypt.compare(password, 'hashPassword');
      if (!isHashValid) {
        throw new UnauthorizedException('아이디와 비밀번호를 확인해주세요.');
      }
    } catch (err) {}
  }

  async jwtSignOut() {
    try {
    } catch (err) {}
  }

  async getTokens(payload: JwtAccessPayload) {
    try {
      const [accessToken, refreshToken] = await Promise.all([
        this.jwtService.signAsync(payload, {
          secret: JwtAccessSecretConstant.secret,
          expiresIn: '15m',
        }),
        this.jwtService.signAsync(payload, {
          secret: JwtRefreshSecretConstant.secret,
          expiresIn: '7d',
        }),
      ]);
      return { accessToken, refreshToken };
    } catch (err) {}
  }

  async checkRefreshToken(id, refreshToken) {
    try {
      const user = await this.usersService.findOne({ id });
      if (!user || !user.hashed_refresh_token) {
        throw new ForbiddenException('Access Denied');
      }

      const checkRefreshUser =
        await this.usersService.getUserIfRefreshTokenMatches(
          user.id,
          refreshToken,
        );

      if (!checkRefreshUser) {
        throw new ForbiddenException('Access Denied');
      }

      const payload: JwtAccessPayload = {
        uid: checkRefreshUser.id,
        email: checkRefreshUser.email,
        nickname: checkRefreshUser.nickname,
      };
      const tokens = await this.getTokens(payload);

      await this.usersService.setCurrentRefreshToken(
        user.id,
        tokens.refreshToken,
      );

      return { tokens };
    } catch (err) {}
  }

  async OAuthLogin() {
    try {
    } catch (err) {}
  }
}
