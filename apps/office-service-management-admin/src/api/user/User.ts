import { Office } from "../office/Office";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  office?: Office | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
