import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerQueueService } from "./customerQueue.service";
import { CustomerQueueControllerBase } from "./base/customerQueue.controller.base";

@swagger.ApiTags("customerQueues")
@common.Controller("customerQueues")
export class CustomerQueueController extends CustomerQueueControllerBase {
  constructor(
    protected readonly service: CustomerQueueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
