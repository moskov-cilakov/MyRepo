import { Office } from "../office/Office";

export type ServiceAgent = {
  createdAt: Date;
  id: string;
  office?: Office | null;
  serviceType?: "Option1" | null;
  updatedAt: Date;
};
