import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, SecretOrKeyProvider, Strategy } from 'passport-jwt';
import { Payload } from '../users/interfaces/payload-user.interface';
import { AuthenticatedUser } from '../users/interfaces/authenticate-user.interface';

type PassportJwtSecretFn = (options: any) => SecretOrKeyProvider;

@Injectable()
export class SupabaseStrategy extends PassportStrategy(Strategy, 'supabase') {
  constructor(private readonly configService: ConfigService) {
    const supabaseUrl = SupabaseStrategy.getSupabaseUrl(configService);

    const getSecret = passportJwtSecret as unknown as PassportJwtSecretFn;

    const secretOrKeyProvider = getSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${supabaseUrl}/auth/v1/.well-known/jwks.json`,
    });

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider,
      algorithms: ['RS256'],
    });
  }

  private static getSupabaseUrl(configService: ConfigService): string {
    const supabaseUrl = configService.get<string>('SUPABASE_URL');

    if (!supabaseUrl) {
      throw new Error('A variável de ambiente SUPABASE_URL não está definida.');
    }

    return supabaseUrl;
  }

  validate(payload: Payload): AuthenticatedUser {
    return !payload || !payload.sub
      ? (() => {
          throw new UnauthorizedException('Token inválido');
        })()
      : {
          id: payload.sub,
          email: payload.email ?? '',
          role: payload.role ?? 'authenticated',
        };
  }
}
