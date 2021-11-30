import { AuthService } from './auth.service';

export function authInitializer(auth: AuthService) {
    return () => new Promise(resolve => {
        // attempt to refresh token on app start up to auto authenticate
        auth.refreshToken()
            .subscribe()
            .add(resolve);
    });
}