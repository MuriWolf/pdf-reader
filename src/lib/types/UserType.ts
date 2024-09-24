export interface UserType {
    id_user: number;
    email: string;
    nome_user: string;
    username: string;
    role: 'admin' | 'user';
    foto?: string;
}