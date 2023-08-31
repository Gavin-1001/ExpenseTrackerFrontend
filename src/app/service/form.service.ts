import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expense} from "../common/models/expense";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private baseUrl: any = 'http:localhost:8080/api/expense';

  constructor(private httpClient: HttpClient) { }


  // public getExpenses(): Observable<Expense[]>{
  //   return this.httpClient.get<Expense[]>(`${this.baseUrl}/getAllExpenses`);
  // }

  public postExpenseForm(expense:Expense): Observable<any>{
    return this.httpClient.post<Expense>(`${this.baseUrl}/createExpense`, expense);
  }


}
