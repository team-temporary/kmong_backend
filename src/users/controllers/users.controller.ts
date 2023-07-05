import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  async getUsers() {}

  @Get(':id')
  async getUser() {}

  @Put(':id')
  async updateUser() {}

  @Delete(':id')
  async deleteUser() {}

  @Post()
  async changePassword() {}
}
