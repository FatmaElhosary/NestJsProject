import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  ParseIntPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  //reading
  @Get()
  getUsers() {
    return this.userService.get();
  }
  //storing
  @Post()
  store(@Body() body: any) {
    return this.userService.create(body);
  }
  //updating
  @Patch('/:userId')
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param() param: { userId: number },
  ) {
    return this.userService.update(updateUserDto, param);
  }
  //get single user
  @Get('/:userId')
  getUser(@Param('userId',ParseIntPipe) userId: number ) {
    return this.userService.show(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }
}
