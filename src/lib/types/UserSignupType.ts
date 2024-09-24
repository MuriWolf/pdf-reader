export interface UserSignupType {
    nome_user: string;
    username: string;
    senha: string;
    email: string;
    role: { value: 'admin' | 'user' } ;
    foto?: string;
}