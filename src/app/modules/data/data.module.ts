import { Module } from '@nestjs/common';
import { PrismaService1 } from 'src/app/database/prisma/prisma1.service';
import { PrismaService2 } from 'src/app/database/prisma/prisma2.service';
import { DataController } from './data.controller';
import { DataService } from './data.service';

@Module({
  controllers: [DataController],
  providers: [DataService, PrismaService1, PrismaService2],
})
export class DataModule {}
