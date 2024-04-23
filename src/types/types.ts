export type Expense = {
    id: string,
    expenseName: string,
    amount: number,
    category: string,
    date: Value

}
export type Show = {
    show: boolean

}
export type DraftExpensive = Omit<Expense, 'id'>


type ValuePice = Date | null;
export type Value = ValuePice | [ValuePice, ValuePice];

export type CategoriesType = {
    id: string,
    name: string,
    icon: string
}