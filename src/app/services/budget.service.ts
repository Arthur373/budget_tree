import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, shareReplay} from "rxjs/operators";
import {BudgetModel} from "../models/Budget.model";
import {Observable} from "rxjs";
import {DepartmentModel} from "../models/Department.model";
import {GroupModel} from "../models/Group.model";
import {CategoryModel} from "../models/Category.model";
import {SubCategoryModel} from "../models/SubCategory.model";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private departments: DepartmentModel[] = [];
  private budgets$!: Observable<BudgetModel[]>;

  constructor(private http: HttpClient) {
    this.initBudgets();
    // this.getDepartments();
  }

  initBudgets() {
    this.budgets$ = this.http.get<BudgetModel[]>("/assets/response.json").pipe(
      map(responseData => responseData["data"]),
      // shareReplay({bufferSize: 1,refCount: true})
    )
  }


  initData() {
    return this.budgets$.pipe(map(budgets => {
      this.dataTransform(budgets);
      return this.departments;
    }))
  }

  dataTransform(budgets: BudgetModel[]) {
    budgets.forEach(budget => {
      this.addDepartment(budget.department_id, budget.department_nm, budget.current_department_am);
      this.addGroup(budget.group_id, budget.group_nm, budget.current_group_am, budget.department_id);
      this.addCategory(budget.category_id, budget.category_nm, budget.current_cat_am, budget.group_id, budget.department_id);
      this.addSubCategory(budget.sub_cat_id, budget.sub_cat_nm, budget.current_sub_cat_am, budget.category_id, budget.group_id, budget.department_id);
    })
  }

  addDepartment(department_id: number, department_nm: string, current_department_am: string) {
    if (!this.departments.find(department => department.department_id == department_id)) {
      const department = new DepartmentModel(department_id, department_nm, current_department_am);
      this.departments.push(department);
    }
  }

  addGroup(group_id: number, group_nm: string, current_group_am: string, department_id: number) {
    const department:DepartmentModel = <DepartmentModel>this.departments.find(department => department.department_id == department_id);
    if (!department?.groups.find(group => group.group_id == group_id)) {
      const group = new GroupModel(group_id, group_nm, current_group_am);
      department.groups.push(group);
    }
  }

  addCategory(category_id: number, category_nm: string, current_cat_am: string, group_id: number, department_id: number) {
    const department:DepartmentModel = <DepartmentModel>this.departments.find(department => department.department_id == department_id);
    const group:GroupModel = <GroupModel>department.groups.find(group => group.group_id == group_id);
    if (!group.categories.find(category => category.category_id == category_id)) {
      const category = new CategoryModel(category_id, category_nm, current_cat_am);
      group.categories.push(category);
    }
  }

  addSubCategory(sub_cat_id: number, sub_cat_nm: string, current_sub_cat_am: string, category_id: number, group_id: number, department_id: number) {
    const department:DepartmentModel = <DepartmentModel>this.departments.find(department => department.department_id == department_id);
    const group:GroupModel = <GroupModel>department.groups.find(group => group.group_id == group_id);
    const category:CategoryModel = <CategoryModel>group.categories.find(category => category.category_id == category_id);
    if (!category?.subCategories.find(subCategory => subCategory.sub_cat_id == sub_cat_id)) {
      const subCategory = new SubCategoryModel(sub_cat_id, sub_cat_nm, current_sub_cat_am);
      category?.subCategories.push(subCategory);
    }
  }
}
