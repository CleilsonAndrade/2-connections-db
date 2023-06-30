import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService1 } from 'src/app/database/prisma/prisma1.service';
import { PrismaService2 } from 'src/app/database/prisma/prisma2.service';
import { normalizeReturn } from 'src/app/utils/normalizeReturn';

@Injectable()
export class DataService {
  constructor(
    private readonly prismaService1: PrismaService1,
    private readonly prismaService2: PrismaService2,
  ) {}

  async copyData(): Promise<any[]> {
    try {
      const dataFromSource: any[] = await this.prismaService1
        .$queryRaw`SELECT user_name FROM user;`;

      console.log(dataFromSource);

      if (dataFromSource.length >= 1) {
        const createCopy = await Promise.all(
          dataFromSource.map(async (element) => {
            return this.prismaService2.u_user.create({
              data: {
                username: element.username,
              },
            });
          }),
        );

        return normalizeReturn(createCopy);
      }

      throw new Error('Data copy failed');
    } catch (error: any) {
      console.log(error);
      throw new BadGatewayException(error.message);
    }
  }
}
