export interface UserType {
    id: number;
    email: string;
    nome_user: string;
    username: string;
    role: 'admin' | 'user';
    foto?: string;
}