import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CustomerQueueWhereInput = {
  duration?: FloatNullableFilter;
  id?: StringFilter;
  queueNumber?: IntNullableFilter;
  serviceType?: "Option1";
  status?: "Option1";
};
