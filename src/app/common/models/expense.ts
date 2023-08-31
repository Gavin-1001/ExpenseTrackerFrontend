export class Expense {
  constructor(

      public id: string,
      public expenseName: string,
      public expenseDescription: string,
      public price: number,
      public dateCreated: string
  ) {
  }
}
