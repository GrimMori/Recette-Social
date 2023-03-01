import { Request } from 'express';
import { AuthService } from './auth.service';
export declare class LoginController {
    private authService;
    constructor(authService: AuthService);
    login(req: Request): Promise<{
        access_token: string;
    }>;
}
