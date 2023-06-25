import {
  Injectable,
  type INestApplication,
  type OnModuleInit,
} from '@nestjs/common';
import { PrismaClient as PrismaClient2 } from '@prisma/client';

@Injectable()
export class PrismaService2 extends PrismaClient2 implements OnModuleInit {
  [x: string]: any;
  async onModuleInit(): Promise<any> {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication): void {
    this.$on('beforeExit', () => {
      void app.close();
    });
  }
}
