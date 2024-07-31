import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { FindUsersService } from 'src/users/services/find-users.service';
import { LoginDto } from './dto/login-dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly findUserService: FindUsersService,
  ) { }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.findUserService.findOneByEmail(email);
    if (!user || !(await bcryptjs.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials!');
    }

    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(payload: any): Promise<any> {
    return { userId: payload.sub, email: payload.email };
  }
}
