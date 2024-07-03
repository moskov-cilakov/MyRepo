import { SortOrder } from "../../util/SortOrder";

export type CustomerQueueOrderByInput = {
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  queueNumber?: SortOrder;
  serviceType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
