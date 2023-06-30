import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DataService } from './data.service';

@ApiTags('Data Copy')
@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  // @Post()
  // create(@Body() createDatumDto: CreateDatumDto) {
  //   return this.dataService.create(createDatumDto);
  // }

  @Get()
  async copyData(): Promise<any> {
    return await this.dataService.copyData();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dataService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDatumDto: UpdateDatumDto) {
  //   return this.dataService.update(+id, updateDatumDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dataService.remove(+id);
  // }
}
