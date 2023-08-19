import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AdministratorInterface {
  id?: string;
  position: string;
  hire_date: any;
  salary: number;
  department: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AdministratorGetQueryInterface extends GetQueryInterface {
  id?: string;
  position?: string;
  department?: string;
  user_id?: string;
}
