import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtAccessStrategy } from './jwt/strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './jwt/strategies/jwt-refresh.strategy';
import { JwtKakaoStrategy } from './jwt/strategies/jwt-social-kakao.strategy';
import { JwtGoogleStrategy } from './jwt/strategies/jwt-social-google.strategy';
import { JwtNaverStrategy } from './jwt/strategies/jwt-social-naver.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user_information.entity';

@Module({
  imports: [JwtModule.register({}), forwardRef(() => UsersModule)],
  controllers: [AuthController],
  providers: [
    AuthService,
    // JwtAccessStrategy,
    // JwtRefreshStrategy,
    // JwtKakaoStrategy,
    // JwtGoogleStrategy,
    // JwtNaverStrategy,
  ],
})
export class AuthModule {}
