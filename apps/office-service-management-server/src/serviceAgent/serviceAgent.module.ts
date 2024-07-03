import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServiceAgentModuleBase } from "./base/serviceAgent.module.base";
import { ServiceAgentService } from "./serviceAgent.service";
import { ServiceAgentController } from "./serviceAgent.controller";
import { ServiceAgentResolver } from "./serviceAgent.resolver";

@Module({
  imports: [ServiceAgentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServiceAgentController],
  providers: [ServiceAgentService, ServiceAgentResolver],
  exports: [ServiceAgentService],
})
export class ServiceAgentModule {}
