import { ServiceAgent as TServiceAgent } from "../api/serviceAgent/ServiceAgent";

export const SERVICEAGENT_TITLE_FIELD = "id";

export const ServiceAgentTitle = (record: TServiceAgent): string => {
  return record.id?.toString() || String(record.id);
};
