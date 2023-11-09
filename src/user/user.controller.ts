import { Controller, Get, UseGuards, Patch } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';

@Controller('users')
export class UserController {
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(
        @GetUser() user: User
    ) {
        console.log({
            user
        })
        return user;
    }

    @Patch()
    editUser() {

    }
}
