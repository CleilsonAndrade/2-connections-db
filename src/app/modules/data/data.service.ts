import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService2 } from 'src/app/database/prisma/prisma_2.service';
import { normalizeReturn } from 'src/app/utils/normalizeReturn';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class DataService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly prismaService2: PrismaService2,
  ) { }

  async copyData(): Promise<any[]> {
    try {
      const dataFromSource: any[] = await this.prismaService.$queryRaw`
        SELECT * FROM user;`;

      console.log(dataFromSource);

      if ((await dataFromSource).length >= 1) {

        const createUser = await Promise.all(
          dataFromSource.map(async (element) => {
            const existingRecord =
              await this.prismaService.table_receiver.findUnique({
                where: { customer_id: parseInt(element.customer_id) },
              });

            if (existingRecord) {
              throw new Error(`User ID ${element.customer_id} already exist!`)
            } else {
              return this.prismaService.table_receiver.create({
                data: {
                  *
                },
              });
            }
          }),
        );

        return normalizeReturn(createUser);
      } else {
        throw new Error('Not found User');
      }
    } catch (error: any) {
      console.log(error);
      throw new BadGatewayException(error.message);
    }
  }
}
