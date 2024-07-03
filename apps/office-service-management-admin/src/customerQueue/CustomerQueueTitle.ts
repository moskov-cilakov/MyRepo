import { CustomerQueue as TCustomerQueue } from "../api/customerQueue/CustomerQueue";

export const CUSTOMERQUEUE_TITLE_FIELD = "id";

export const CustomerQueueTitle = (record: TCustomerQueue): string => {
  return record.id?.toString() || String(record.id);
};
