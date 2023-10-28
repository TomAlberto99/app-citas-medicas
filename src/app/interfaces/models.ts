import { ILista, IUser } from "./interdas";

export class User implements IUser{
    id: number | null;
    userName: string | null;
    email: string | null;
    password: string | null;

    constructor(user?: any){
        this.id = user.id != null ? user.id:null;
        this.userName = user.userName != null ? user.userName: null;
        this.email = user.email != null ? user.email : null;
        this.password = user.password != null ? user.password : null;
    }
}

export class Lista implements ILista{
    id: number | null;
    nombrePax: string | null;
    fechaCita: string | null;
    horaCita: string  | null;
    sintomas: string  | null;

    constructor(lista?: any){
        this.id = lista.id != null ? lista.id : null;
        this.nombrePax = lista.nombrePax != null ? lista.nombrePax : null;
        this.fechaCita = lista.fechaCita != null ? lista.fechaCita : null;
        this.horaCita = lista.horaCita != null ? lista.horaCita : null;
        this.sintomas = lista.sintomas != null ? lista.sintomas : null;
    }
 
}