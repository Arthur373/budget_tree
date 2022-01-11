import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, shareReplay} from "rxjs/operators";
import {BudgetModel} from "../models/Budget.model";
import {Observable} from "rxjs/dist/types";
import {DepartmentModel} from "../models/Department.model";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  departments$: Observable<Set<DepartmentModel>>
  budgets$: Observable<BudgetModel[]>

  constructor(private http: HttpClient) {
    this.initBudgets();
  }

  initBudgets() {
    this.departments$ =  this.http.get<BudgetModel[]>("/assets/response.json").pipe(
        map(responseData => responseData["data"]),
        shareReplay({bufferSize: 1,refCount: true})
    )
  }


  getDepartments(): Observable<DepartmentModel[]>{
    this.departments$ = this.budgets$.pipe(
      map((budgets: BudgetModel[]) => {

        const departments: DepartmentModel[] = []

        budgets.forEach(budget => departments.push({
          department_id: budget.department_id,
          department_nm: budget.department_nm,
          current_department_am: budget.current_department_am,
        }))
        return departments;
      })
    )
  }


  // createDepartment(){
  //
  // }
}
