import {GroupModel} from "./Group.model";

export interface DepartmentModel {
  department_id: number,
  department_nm: string,
  current_department_am: string,
  // group: GroupModel[]
}
