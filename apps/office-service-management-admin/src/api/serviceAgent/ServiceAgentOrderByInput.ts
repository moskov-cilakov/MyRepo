import { SortOrder } from "../../util/SortOrder";

export type ServiceAgentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  officeId?: SortOrder;
  serviceType?: SortOrder;
  updatedAt?: SortOrder;
};
