import { IMessages } from 'app/shared/model/messages.model';

export interface IUsers {
  id?: number;
  nameAr?: string;
  nameEn?: string;
  code?: string;
  status?: number;
  usersMessages?: IMessages[];
}

export class Users implements IUsers {
  constructor(
    public id?: number,
    public nameAr?: string,
    public nameEn?: string,
    public code?: string,
    public status?: number,
    public usersMessages?: IMessages[]
  ) {}
}
