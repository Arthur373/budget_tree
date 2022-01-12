export class SubCategoryModel {
  private _sub_cat_id!: number;
  private _sub_cat_nm!: string;
  private _current_sub_cat_am!: string;


  constructor(sub_cat_id: number, sub_cat_nm: string, current_sub_cat_am: string) {
    this._sub_cat_id = sub_cat_id;
    this._sub_cat_nm = sub_cat_nm;
    this._current_sub_cat_am = current_sub_cat_am;
  }

  get sub_cat_id(): number {
    return this._sub_cat_id;
  }

  set sub_cat_id(value: number) {
    this._sub_cat_id = value;
  }

  get sub_cat_nm(): string {
    return this._sub_cat_nm;
  }

  set sub_cat_nm(value: string) {
    this._sub_cat_nm = value;
  }

  get current_sub_cat_am(): string {
    return this._current_sub_cat_am;
  }

  set current_sub_cat_am(value: string) {
    this._current_sub_cat_am = value;
  }

}
