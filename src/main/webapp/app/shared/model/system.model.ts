import { IMessages } from 'app/shared/model/messages.model';
import { ISystemServices } from 'app/shared/model/system-services.model';

export interface ISystem {
  id?: number;
  nameAr?: string;
  nameEn?: string;
  code?: string;
  status?: number;
  systemMessages?: IMessages[];
  systemServices?: ISystemServices[];
}

export class System implements ISystem {
  constructor(
    public id?: number,
    public nameAr?: string,
    public nameEn?: string,
    public code?: string,
    public status?: number,
    public systemMessages?: IMessages[],
    public systemServices?: ISystemServices[]
  ) {}
}
