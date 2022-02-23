
export { };
declare global {
    export interface DBEntity {
        CodeError?: number;
        MsgError?: string;
    }
    export interface SecurityPageEntity {
        
        Consultar?: boolean;
        Insertar?: boolean;
        Eliminar?: boolean;
        Actualizar?: boolean;
        FormUpdate?: boolean;
     }

    export interface Persona {
        id?: number;
        edad?: number;
        Nombre?: string;
        //TipoPersona?: TipoPersona;
    }
}