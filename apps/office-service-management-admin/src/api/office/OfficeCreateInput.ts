import { ServiceAgentCreateNestedManyWithoutOfficesInput } from "./ServiceAgentCreateNestedManyWithoutOfficesInput";
import { UserCreateNestedManyWithoutOfficesInput } from "./UserCreateNestedManyWithoutOfficesInput";

export type OfficeCreateInput = {
  officeName?: string | null;
  serviceAgents?: ServiceAgentCreateNestedManyWithoutOfficesInput;
  users?: UserCreateNestedManyWithoutOfficesInput;
};
