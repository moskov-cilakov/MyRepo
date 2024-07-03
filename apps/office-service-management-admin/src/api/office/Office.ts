import { ServiceAgent } from "../serviceAgent/ServiceAgent";
import { User } from "../user/User";

export type Office = {
  createdAt: Date;
  id: string;
  officeName: string | null;
  serviceAgents?: Array<ServiceAgent>;
  updatedAt: Date;
  users?: Array<User>;
};
