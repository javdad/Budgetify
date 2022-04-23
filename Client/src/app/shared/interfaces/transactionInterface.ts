export interface Transaction {
    _id: string,
    type: string,
    title: string,
    description: string,
    payee: string,
    amount: number,
    currency: string,
    categoryId: string,
    accountId: string,
    userId: string,
    dateOfCreation: string
}