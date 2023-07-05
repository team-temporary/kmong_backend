import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtRefreshSecretConstant } from 'src/auth/constants/jwt-refresh-secret.constant';
import { UsersService } from 'src/users/services/users.service';
import { JwtRefreshPayload } from 'src/auth/types/jwt-refresh.payload';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JwtRefreshSecretConstant.secret,
      ignoreExpiration: false,
      passReqToCallback: true,
    });
  }

  async validate(payload: JwtRefreshPayload) {
    const refreshToken = payload.refreshToken;
    // const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
    const userId = payload.uid;
    const user = await this.usersService.findOne({
      id: userId,
    });

    if (user) {
      return { user, refreshToken }; // request.user
    } else {
      throw new UnauthorizedException('접근 오류');
    }
  }
}
