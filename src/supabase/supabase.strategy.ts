import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

interface Payload {
  sub: string;
  email: string;
  role: string;
}

interface User {
  userId: string;
  email: string;
  role: string;
}

@Injectable()
export class SupabaseStrategy extends PassportStrategy(Strategy, 'supabase') {
  constructor(private configService: ConfigService) {
    const jwtSecret = configService.get<string>('SUPABASE_JWT_SECRET');

    if (!jwtSecret) {
      throw new Error(
        'A variável de ambiente SUPABASE_JWT_SECRET não está definida.',
      );
    }

    super({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  ignoreExpiration: false,
  secretOrKey: jwtSecret,
  algorithms: ['ES256', 'HS256'], // <-- Adicione os algoritmos aceitos
});
  }

  validate(payload: Payload): User {
    if (!payload) {
      throw new UnauthorizedException('Token inválido');
    }
    return {
      userId: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }
}
