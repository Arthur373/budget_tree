import { Component, OnInit } from '@angular/core';
import {DepartmentModel} from "../models/Department.model";
import {BudgetService} from "../services/budget.service";

@Component({
  selector: 'app-budget-tree',
  templateUrl: './budget-tree.component.html',
  styleUrls: ['./budget-tree.component.css']
})
export class BudgetTreeComponent implements OnInit {

  departments:DepartmentModel[] = [];

  constructor(private budget: BudgetService) {
  }

  ngOnInit(): void {
    this.budget.initData().subscribe(data => {
      this.departments = data
      console.log(this.departments);
    });
  }
}
