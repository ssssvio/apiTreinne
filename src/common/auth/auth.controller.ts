import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { User } from '../users/user.entity'; // Ajuste o caminho conforme necessário

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() user: any) {
    return this.authService.login(user);
  }
}
