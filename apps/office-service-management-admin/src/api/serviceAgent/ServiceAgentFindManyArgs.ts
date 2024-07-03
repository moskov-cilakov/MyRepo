import { ServiceAgentWhereInput } from "./ServiceAgentWhereInput";
import { ServiceAgentOrderByInput } from "./ServiceAgentOrderByInput";

export type ServiceAgentFindManyArgs = {
  where?: ServiceAgentWhereInput;
  orderBy?: Array<ServiceAgentOrderByInput>;
  skip?: number;
  take?: number;
};
