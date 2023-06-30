import { Module } from '@nestjs/common';
import { PrismaService1 } from './prisma1.service';
import { PrismaService2 } from './prisma2.service';

@Module({
  exports: [PrismaService1, PrismaService2],
})
export class PrismaModule {}
