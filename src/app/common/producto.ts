export interface Productos {
    productos: Producto[]
}

export interface Producto {
    dispositivo: string
    marcas: Marca[]
    
}
export interface Marca {
    nombreMarca: string
    nombre: string
    caracteristicas: string
    descripcion: string
    precio: string

}