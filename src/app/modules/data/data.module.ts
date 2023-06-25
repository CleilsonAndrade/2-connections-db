import { Module } from '@nestjs/common';
import { PrismaService } from 'src/app/database/prisma/prisma.service';
import { PrismaService2 } from 'src/app/database/prisma/prisma_2.service';
import { DataController } from './data.controller';
import { DataService } from './data.service';

@Module({
  controllers: [DataController],
  providers: [DataService, PrismaService, PrismaService2],
})
export class DataModule { }
