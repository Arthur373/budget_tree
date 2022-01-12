import { Component, OnInit } from '@angular/core';
import {DepartmentModel} from "../models/Department.model";
import {BudgetService} from "../services/budget.service";
import {group} from "@angular/animations";

@Component({
  selector: 'app-budget-tree',
  templateUrl: './budget-tree.component.html',
  styleUrls: ['./budget-tree.component.css']
})
export class BudgetTreeComponent implements OnInit {

  departments:DepartmentModel[] = [];
  isDepartmentActive: boolean = false;
  isGroupActive: boolean = false;
  isCategoryActive: boolean = false;
  isSubCategoryActive: boolean = false;

  constructor(private budget: BudgetService) {
  }

  ngOnInit(): void {
    this.budget.initData().subscribe(data => {
      this.departments = data
      console.log(this.departments);
    });
  }

  toggleDepartment() {
    this.departments.map(department => {
      department.isActive = false;
    })
  }

  toggleGroup() {
    this.departments.map(department => {
      department.isActive = !department.isActive;
      department.groups.map(group => {
        group.isActive = false;
      })
    })
  }

  toggleCategory() {
    this.departments.map(department => {
      department.isActive = true;
      department.groups.map(group => {
        group.isActive = !group.isActive;
      })
    })
  }


  toggleSubCategory() {
    this.departments.map(department => {
      department.isActive = true;
      department.groups.map(group => {
        group.isActive = true;
        group.categories.map(category => {
          category.isActive = !category.isActive
        })
      })
    })
  }
}
