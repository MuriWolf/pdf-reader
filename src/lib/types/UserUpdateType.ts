export interface UserUpdateType {
    id: string;
    nome_user: string;
    username: string;
    email: string;
    role: 'admin' | 'user';
    senha?: string;
    foto?: string;
}