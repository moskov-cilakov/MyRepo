import { CustomerQueueWhereInput } from "./CustomerQueueWhereInput";
import { CustomerQueueOrderByInput } from "./CustomerQueueOrderByInput";

export type CustomerQueueFindManyArgs = {
  where?: CustomerQueueWhereInput;
  orderBy?: Array<CustomerQueueOrderByInput>;
  skip?: number;
  take?: number;
};
