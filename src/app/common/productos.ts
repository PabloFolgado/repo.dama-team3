export interface Productos {
    categorias: Categoria[]
}

export interface Categoria{
[x: string]: any
    dispositivo: string
    marcas: Marca[]
    
}
export interface Marca {
    id: number
    nombreMarca: string
    nombre: string
    img: string
    caracteristicas: string
    descripcion: string
    precio: string

}