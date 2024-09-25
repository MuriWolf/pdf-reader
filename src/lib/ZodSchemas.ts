import { z } from "zod";

export const UserLoginSchema = z.object({
    email: z
      .string({ required_error: "Email é obrigatório" })
      .min(1, { message: "Email é obrigatório" })
      .max(60)
      .email({ message: "Email deve ter um formato válido" }),
    senha: z
      .string({ required_error: "Senha é obrigatória" })
      .min(1, { message: "Senha é obrigatória" })
      .max(255)
      .trim(),
  });

export const UserSignupSchema = z.object({
  nome_user: z
    .string({ required_error: "Nome é obrigatório" })
    .min(2, { message: "Nome é obrigatório" })
    .max(60, { message: "Nome deve ser menor que 60 caracteres" })
    .trim(),
  username: z
    .string({ required_error: "Username é obrigatório" })
    .min(2, { message: "Username é obrigatório" })
    .max(60, { message: "Username deve ser menor que 60 caracteres" })
    .trim(),
  email: z
    .string({ required_error: "Email é obrigatório" })
    .min(1, { message: "Email é obrigatório" })
    .max(50, { message: "Email deve ser menor que 50 caracteres" })
    .email({ message: "Email deve ter um formato válido" }),
  senha: z
    .string({ required_error: "Senha é obrigatória" })
    .min(1, { message: "Senha é obrigatória" })
    .max(255, { message: "Senha deve ser menor que 255 caracteres" })
    .trim(),
    role: z.enum(['admin', 'user'],  { required_error: 'Role é obrigatório' }),
    foto: z.string().max(255, { message: "Tamanho máximo da URL da imagem deve ser de 255 caracteres" })
});
  
export const UserUpdateSchema = z.object({
  id: z.string(),
  nome_user: z
    .string({ required_error: "Nome é obrigatório" })
    .min(2, { message: "Nome é obrigatório" })
    .max(60, { message: "Nome deve ser menor que 60 caracteres" })
    .trim(),
  username: z
    .string({ required_error: "Username é obrigatório" })
    .min(0, { message: "Username é obrigatório" })
    .max(60, { message: "Username deve ser menor que 60 caracteres" })
    .trim(),
  email: z
    .string({ required_error: "Email é obrigatório" })
    .min(1, { message: "Email é obrigatório" })
    .max(50, { message: "Email deve ser menor que 50 caracteres" })
    .email({ message: "Email deve ter um formato válido" }),
  senha: z
    .string()
    .max(255, { message: "Senha deve ser menor que 255 caracteres" })
    .trim(),
    role: z.enum(['admin', 'user'],  { required_error: 'Role é obrigatório' }),
    foto: z.string().max(255, { message: "Tamanho máximo da URL da imagem deve ser de 255 caracteres" })
});
  