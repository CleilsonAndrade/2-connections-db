import { Module } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { PrismaService2 } from './prisma_2.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService2],
})
export class PrismaModule { }
