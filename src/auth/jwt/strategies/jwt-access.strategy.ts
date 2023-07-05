import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtAccessSecretConstant } from 'src/auth/constants/jwt-access-secret.constant';
import { UsersService } from 'src/users/services/users.service';
import { JwtAccessPayload } from 'src/auth/types/jwt-access.payload';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(
  Strategy,
  'jwt-access',
) {
  constructor(private readonly usersService: UsersService) {
    // 의존성 주입

    super({
      // jwt 에 대한 설정
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JwtAccessSecretConstant.secret,
      ignoreExpiration: false,
    });
  }

  async validate(payload: JwtAccessPayload) {
    const userId = payload.uid;
    const user = await this.usersService.findOne({
      id: userId,
    });

    if (user) {
      return user; // request.user
    } else {
      throw new UnauthorizedException('접근 오류');
    }
  }
}
