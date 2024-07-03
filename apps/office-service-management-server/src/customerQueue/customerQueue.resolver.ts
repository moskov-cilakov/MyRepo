import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerQueueResolverBase } from "./base/customerQueue.resolver.base";
import { CustomerQueue } from "./base/CustomerQueue";
import { CustomerQueueService } from "./customerQueue.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerQueue)
export class CustomerQueueResolver extends CustomerQueueResolverBase {
  constructor(
    protected readonly service: CustomerQueueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
