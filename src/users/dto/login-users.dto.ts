import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'Informe um e-mail válido.' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  email: string;

  @IsString({ message: 'A senha deve ser um texto.' })
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  password: string;
}
