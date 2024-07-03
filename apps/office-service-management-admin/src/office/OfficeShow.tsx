import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { OFFICE_TITLE_FIELD } from "./OfficeTitle";

export const OfficeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="officeName" source="officeName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ServiceAgent"
          target="officeId"
          label="ServiceAgents"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Office"
              source="office.id"
              reference="Office"
            >
              <TextField source={OFFICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="serviceType" source="serviceType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="officeId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField
              label="Office"
              source="office.id"
              reference="Office"
            >
              <TextField source={OFFICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="role" source="role" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
