import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OfficeTitle } from "../office/OfficeTitle";

export const ServiceAgentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="office.id" reference="Office" label="Office">
          <SelectInput optionText={OfficeTitle} />
        </ReferenceInput>
        <SelectInput
          source="serviceType"
          label="serviceType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
