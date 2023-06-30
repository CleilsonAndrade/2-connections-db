import { PartialType } from '@nestjs/mapped-types';
import { CreateDataDto } from './create-data.dto';

export class UpdateDataDto extends PartialType(CreateDataDto) {}
