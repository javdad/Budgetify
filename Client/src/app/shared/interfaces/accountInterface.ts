export interface Account {
    _id: string,
    title: string,
    description: string,
    currency: string,
    balance: number,
    dateOfCreation: Date,
    dateOfUpdate: Date | null,
    userId: string,
}