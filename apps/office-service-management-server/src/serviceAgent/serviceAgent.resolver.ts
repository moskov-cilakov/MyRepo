import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ServiceAgentResolverBase } from "./base/serviceAgent.resolver.base";
import { ServiceAgent } from "./base/ServiceAgent";
import { ServiceAgentService } from "./serviceAgent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ServiceAgent)
export class ServiceAgentResolver extends ServiceAgentResolverBase {
  constructor(
    protected readonly service: ServiceAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
