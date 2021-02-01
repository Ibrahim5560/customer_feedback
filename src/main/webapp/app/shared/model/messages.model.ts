export interface IMessages {
  id?: number;
  counter?: number;
  trsId?: number;
  userId?: number;
  message?: string;
  status?: number;
  applicantName?: string;
  centerId?: number;
  systemId?: number;
  systemServicesId?: number;
  usersId?: number;
}

export class Messages implements IMessages {
  constructor(
    public id?: number,
    public counter?: number,
    public trsId?: number,
    public userId?: number,
    public message?: string,
    public status?: number,
    public applicantName?: string,
    public centerId?: number,
    public systemId?: number,
    public systemServicesId?: number,
    public usersId?: number
  ) {}
}
