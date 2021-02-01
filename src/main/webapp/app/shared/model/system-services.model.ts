import { IMessages } from 'app/shared/model/messages.model';

export interface ISystemServices {
  id?: number;
  nameAr?: string;
  nameEn?: string;
  code?: string;
  status?: number;
  systemServicesMessages?: IMessages[];
  systemId?: number;
}

export class SystemServices implements ISystemServices {
  constructor(
    public id?: number,
    public nameAr?: string,
    public nameEn?: string,
    public code?: string,
    public status?: number,
    public systemServicesMessages?: IMessages[],
    public systemId?: number
  ) {}
}
