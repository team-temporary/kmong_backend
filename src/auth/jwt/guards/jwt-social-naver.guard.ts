import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtNaverGuard extends AuthGuard('jwt-naver') {}
