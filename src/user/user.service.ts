import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
///write your logic here
@Injectable()
export class UserService {
  //get all users
  get() {
    return { name: 'fatmdsa', email: 'fatma@gmail.com' };
  }
  create(body: any) {
    return body;
  }
  update(updateUserDto: UpdateUserDto, param: { userId: number }) {
    return { updateUserDto, param };
  }
  show(userId: number ) {
    return {userId};
  }
  delete(param: { userId: number }) {
    return param;
  }
}
