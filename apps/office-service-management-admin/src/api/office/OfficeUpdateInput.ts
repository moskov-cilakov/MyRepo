import { ServiceAgentUpdateManyWithoutOfficesInput } from "./ServiceAgentUpdateManyWithoutOfficesInput";
import { UserUpdateManyWithoutOfficesInput } from "./UserUpdateManyWithoutOfficesInput";

export type OfficeUpdateInput = {
  officeName?: string | null;
  serviceAgents?: ServiceAgentUpdateManyWithoutOfficesInput;
  users?: UserUpdateManyWithoutOfficesInput;
};
