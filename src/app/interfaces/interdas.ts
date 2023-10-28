export interface IUser{
    id: number | null;
    userName: string | null;
    email: string | null;
    password: string | null;
}
export interface ILista{
    id: number | null;
    nombrePax: string | null;
    fechaCita: string | null;
    horaCita: string  | null;
    sintomas: string  | null;
}