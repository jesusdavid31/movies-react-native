/* eslint-disable eol-last */


export abstract class HttpAdapter {
    // La T significa que es un generico y tu le puedes asistir los tipos de datos
    abstract get<T>( url: string, options?: Record< string, unknown > ): Promise<T>;
}