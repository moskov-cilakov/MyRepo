import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServiceAgentService } from "./serviceAgent.service";
import { ServiceAgentControllerBase } from "./base/serviceAgent.controller.base";

@swagger.ApiTags("serviceAgents")
@common.Controller("serviceAgents")
export class ServiceAgentController extends ServiceAgentControllerBase {
  constructor(
    protected readonly service: ServiceAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
