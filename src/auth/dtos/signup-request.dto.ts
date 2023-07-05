import { IsNotEmpty } from 'class-validator';

export class SignUpRequestDto {
  @IsNotEmpty()
  email: string;
}
