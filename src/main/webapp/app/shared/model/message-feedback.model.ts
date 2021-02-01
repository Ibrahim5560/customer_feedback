export interface IMessageFeedback {
  id?: number;
  systemId?: number;
  centerId?: number;
  systemServicesId?: number;
  counter?: number;
  trsId?: number;
  userId?: number;
  message?: string;
  status?: number;
  feedback?: string;
  applicantName?: string;
}

export class MessageFeedback implements IMessageFeedback {
  constructor(
    public id?: number,
    public systemId?: number,
    public centerId?: number,
    public systemServicesId?: number,
    public counter?: number,
    public trsId?: number,
    public userId?: number,
    public message?: string,
    public status?: number,
    public feedback?: string,
    public applicantName?: string
  ) {}
}
