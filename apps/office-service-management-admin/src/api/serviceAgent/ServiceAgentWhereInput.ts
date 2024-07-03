import { StringFilter } from "../../util/StringFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";

export type ServiceAgentWhereInput = {
  id?: StringFilter;
  office?: OfficeWhereUniqueInput;
  serviceType?: "Option1";
};
