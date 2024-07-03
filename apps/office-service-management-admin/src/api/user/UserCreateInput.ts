import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  office?: OfficeWhereUniqueInput | null;
  password: string;
  role?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
};
