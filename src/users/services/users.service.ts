import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findOne(options) {
    return await this.usersRepository.findOne(options);
  }

  async existsByEmail(options) {
    try {
      const user = await this.usersRepository.findOne(options);

      if (user) {
        return user;
      }

      return null;
    } catch (err) {}
  }

  async save(options) {
    return await this.usersRepository.save(options);
  }

  async getUserIfRefreshTokenMatches(id, refreshToken) {
    try {
      const user = await this.findOne({ id });

      const isRefreshTokenMatching = await bcrypt.compare(
        refreshToken,
        user.hashed_refresh_token,
      );

      if (!isRefreshTokenMatching) {
        return null;
      }

      return user;
    } catch (err) {}
  }

  async setCurrentRefreshToken(id, refreshToken) {
    try {
      const salt = await bcrypt.genSalt();
      const currentHashedRefreshToken = await bcrypt.hash(refreshToken, salt);
      await this.usersRepository.update(
        { id },
        { hashed_refresh_token: currentHashedRefreshToken },
      );
    } catch (err) {}
  }

  async removeRefreshToken(id) {
    try {
      return await this.usersRepository.update(
        { id },
        {
          hashed_refresh_token: null,
        },
      );
    } catch (err) {}
  }
}
