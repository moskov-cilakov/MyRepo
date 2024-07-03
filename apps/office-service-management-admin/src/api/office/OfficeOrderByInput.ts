import { SortOrder } from "../../util/SortOrder";

export type OfficeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  officeName?: SortOrder;
  updatedAt?: SortOrder;
};
