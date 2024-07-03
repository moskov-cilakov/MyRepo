import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerQueueModuleBase } from "./base/customerQueue.module.base";
import { CustomerQueueService } from "./customerQueue.service";
import { CustomerQueueController } from "./customerQueue.controller";
import { CustomerQueueResolver } from "./customerQueue.resolver";

@Module({
  imports: [CustomerQueueModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerQueueController],
  providers: [CustomerQueueService, CustomerQueueResolver],
  exports: [CustomerQueueService],
})
export class CustomerQueueModule {}
