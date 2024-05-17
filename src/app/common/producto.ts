export interface Productos {
    productos: Producto[]
}

export interface Producto {
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