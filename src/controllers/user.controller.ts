import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { CreateUserReq } from 'src/controllers/types/user_types/create.user.req';
import { UserRes } from 'src/controllers/types/user_types/user.res';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  @HttpCode(201)
  @ApiResponse({
    status: 201,
    type: UserRes,
  })
  async create(@Body() body: CreateUserReq) {
    return this.userService.createUser(body);
  }
}
