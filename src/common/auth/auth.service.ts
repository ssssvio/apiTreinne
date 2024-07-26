import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { User } from '../users/user.entity'; // Ajuste o caminho conforme necessário

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(payload: any): Promise<any> {
    // Aqui você pode adicionar lógica para validar o usuário
    return { userId: payload.sub, username: payload.username };
  }
}
