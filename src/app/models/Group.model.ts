import {CategoryModel} from "./Category.model";

export class GroupModel {
  private _group_id!: number;
  private _group_nm!: string;
  private _current_group_am!: string;
  private _categories:CategoryModel[] = [];
  private _isActive: boolean = false;


  constructor(group_id: number, group_nm: string, current_group_am: string) {
    this._group_id = group_id;
    this._group_nm = group_nm;
    this._current_group_am = current_group_am;
  }

  get group_id(): number {
    return this._group_id;
  }

  set group_id(value: number) {
    this._group_id = value;
  }

  get group_nm(): string {
    return this._group_nm;
  }

  set group_nm(value: string) {
    this._group_nm = value;
  }

  get current_group_am(): string {
    return this._current_group_am;
  }

  set current_group_am(value: string) {
    this._current_group_am = value;
  }

  get categories(): CategoryModel[] {
    return this._categories;
  }

  set categories(value: CategoryModel[]) {
    this._categories = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }
}
