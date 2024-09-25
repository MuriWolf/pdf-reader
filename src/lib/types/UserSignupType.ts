export interface UserSignupType {
    nome_user: string;
    username: string;
    senha: string;
    email: string;
    role: 'admin' | 'user';
    foto?: string;
}