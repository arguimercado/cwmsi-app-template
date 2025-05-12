
type APIResponse<T> = {
   success: boolean;
   message: string;
   data: T;
}

type AuthResponse = {
   accessToken: string;
   refreshToken: string;
   expiresIn: number;
}

