import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/database/typeorm.config';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { CommentsModule } from './comments/comments.module';
import { ImagesModule } from './images/images.module';
import { InquiriesModule } from './inquiries/inquiries.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule,
    UsersModule,
    BoardsModule,
    CommentsModule,
    ImagesModule,
    InquiriesModule,
    AnalyticsModule,
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
