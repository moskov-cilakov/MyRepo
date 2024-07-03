import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  office?: OfficeWhereUniqueInput;
  role?: "Option1";
  username?: StringFilter;
};
