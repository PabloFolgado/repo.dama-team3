export interface Productos {
    categorias: Categoria[]
}

export interface Categoria {
    id: number
    nombreMarca: string
    nombre: string
    img: string
    caracteristicas: string
    descripcion: string
    precio: string
    productosRelacionados: []

}
