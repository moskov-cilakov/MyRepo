import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerQueueServiceBase } from "./base/customerQueue.service.base";

@Injectable()
export class CustomerQueueService extends CustomerQueueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
