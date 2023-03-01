import { IUser } from 'src/users/interfaces/users.interface';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { EncryptService } from 'src/tools/encrypt.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private encryptService;
    constructor(usersService: UsersService, jwtService: JwtService, encryptService: EncryptService);
    validateUser(email: string, password: string): Promise<IUser>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
