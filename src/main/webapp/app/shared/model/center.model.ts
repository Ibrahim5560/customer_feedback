import { IMessages } from 'app/shared/model/messages.model';

export interface ICenter {
  id?: number;
  nameAr?: string;
  nameEn?: string;
  code?: string;
  status?: number;
  centerMessages?: IMessages[];
}

export class Center implements ICenter {
  constructor(
    public id?: number,
    public nameAr?: string,
    public nameEn?: string,
    public code?: string,
    public status?: number,
    public centerMessages?: IMessages[]
  ) {}
}
