import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ServiceAgentListRelationFilter } from "../serviceAgent/ServiceAgentListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type OfficeWhereInput = {
  id?: StringFilter;
  officeName?: StringNullableFilter;
  serviceAgents?: ServiceAgentListRelationFilter;
  users?: UserListRelationFilter;
};
