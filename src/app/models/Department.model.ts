import {GroupModel} from "./Group.model";

export class DepartmentModel {
  private _department_id!: number;
  private _department_nm!: string;
  private _current_department_am!: string;
  private _groups: GroupModel[] = [];
  private _isActive: boolean = false;


  constructor(department_id: number, department_nm: string, current_department_am: string) {
    this._department_id = department_id;
    this._department_nm = department_nm;
    this._current_department_am = current_department_am;
  }


  get department_id(): number {
    return this._department_id;
  }

  set department_id(value: number) {
    this._department_id = value;
  }

  get department_nm(): string {
    return this._department_nm;
  }

  set department_nm(value: string) {
    this._department_nm = value;
  }

  get current_department_am(): string {
    return this._current_department_am;
  }

  set current_department_am(value: string) {
    this._current_department_am = value;
  }

  get groups(): GroupModel[] {
    return this._groups;
  }

  set groups(value: GroupModel[]) {
    this._groups = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }


}
