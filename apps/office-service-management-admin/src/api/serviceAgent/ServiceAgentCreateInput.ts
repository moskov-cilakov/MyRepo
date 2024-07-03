import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";

export type ServiceAgentCreateInput = {
  office?: OfficeWhereUniqueInput | null;
  serviceType?: "Option1" | null;
};
