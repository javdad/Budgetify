export interface Category {
    _id: string,
    name: string,
    type: string
}

export interface CreateCategory {
    name: string,
    type: string,
}
export interface UpdateCategory {
    name: string,
    type: string,
}