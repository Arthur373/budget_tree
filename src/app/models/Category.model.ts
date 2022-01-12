import {SubCategoryModel} from "./SubCategory.model";

export class CategoryModel {
  private _category_id!: number;
  private _category_nm!: string;
  private _current_cat_am!: string;
  private _subCategories:SubCategoryModel[] = [];
  private _isActive: boolean = false;


  constructor(category_id: number, category_nm: string, current_cat_am: string) {
    this._category_id = category_id;
    this._category_nm = category_nm;
    this._current_cat_am = current_cat_am;
  }

  get category_id(): number {
    return this._category_id;
  }

  set category_id(value: number) {
    this._category_id = value;
  }

  get category_nm(): string {
    return this._category_nm;
  }

  set category_nm(value: string) {
    this._category_nm = value;
  }

  get current_cat_am(): string {
    return this._current_cat_am;
  }

  set current_cat_am(value: string) {
    this._current_cat_am = value;
  }

  get subCategories(): SubCategoryModel[] {
    return this._subCategories;
  }

  set subCategories(value: SubCategoryModel[]) {
    this._subCategories = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

}
