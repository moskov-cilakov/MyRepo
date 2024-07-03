import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceAgentServiceBase } from "./base/serviceAgent.service.base";

@Injectable()
export class ServiceAgentService extends ServiceAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
