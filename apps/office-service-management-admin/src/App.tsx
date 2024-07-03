import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomerQueueList } from "./customerQueue/CustomerQueueList";
import { CustomerQueueCreate } from "./customerQueue/CustomerQueueCreate";
import { CustomerQueueEdit } from "./customerQueue/CustomerQueueEdit";
import { CustomerQueueShow } from "./customerQueue/CustomerQueueShow";
import { ServiceAgentList } from "./serviceAgent/ServiceAgentList";
import { ServiceAgentCreate } from "./serviceAgent/ServiceAgentCreate";
import { ServiceAgentEdit } from "./serviceAgent/ServiceAgentEdit";
import { ServiceAgentShow } from "./serviceAgent/ServiceAgentShow";
import { OfficeList } from "./office/OfficeList";
import { OfficeCreate } from "./office/OfficeCreate";
import { OfficeEdit } from "./office/OfficeEdit";
import { OfficeShow } from "./office/OfficeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"OfficeServiceManagement"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CustomerQueue"
          list={CustomerQueueList}
          edit={CustomerQueueEdit}
          create={CustomerQueueCreate}
          show={CustomerQueueShow}
        />
        <Resource
          name="ServiceAgent"
          list={ServiceAgentList}
          edit={ServiceAgentEdit}
          create={ServiceAgentCreate}
          show={ServiceAgentShow}
        />
        <Resource
          name="Office"
          list={OfficeList}
          edit={OfficeEdit}
          create={OfficeCreate}
          show={OfficeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
