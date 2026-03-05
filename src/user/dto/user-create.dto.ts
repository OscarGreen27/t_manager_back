import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

//todo: prohibit numbers in first/last name
class UserCreateDto {
  @IsString()
  @MinLength(3, { message: 'First name must be longer that 3 letter' })
  @MaxLength(16, { message: 'First name must be shorted that 16 letter' })
  first_name: string;

  @IsString()
  @MinLength(3, { message: 'First name must be longer that 3 letter' })
  @MaxLength(16, { message: 'First name must be shorted that 16 letter' })
  last_name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsString()
  role: string;
}
