import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service'
import { LoginUserDto } from './dto/login-users.dto';

@Injectable()
export class UsersService {
    constructor(private readonly supabase: SupabaseService)
    
    async login( dto : LoginUserDto ): Promise<string>
    {
        const client = this.supabase.getClient();
        const { data, error } = await client.auth.signInWithPassword({
          email: dto.email,
          password: dto.password,
        });
        if (error) throw error;
        return data.session?.access_token;
    }
}
