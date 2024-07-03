import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";

export type ServiceAgentUpdateInput = {
  office?: OfficeWhereUniqueInput | null;
  serviceType?: "Option1" | null;
};
