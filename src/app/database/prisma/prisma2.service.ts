import {
  Injectable,
  type INestApplication,
  type OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client2';

@Injectable()
export class PrismaService2 extends PrismaClient implements OnModuleInit {
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
