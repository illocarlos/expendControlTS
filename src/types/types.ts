export type Expense = {
    id: string,
    expenseName: string,
    amount: number,
    category: string,
    date: Value

}

export type DraftExpensive = Omit<Expense, 'id'>


type ValuePice = Date | null;
export type Value = ValuePice | [ValuePice, ValuePice];