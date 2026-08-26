import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IpvasService } from './ipvas.service';
import { CreateIpvaDto } from './dto/create-ipva.dto';
import { UpdateIpvaDto } from './dto/update-ipva.dto';

@Controller('ipvas')
export class IpvasController {
  constructor(private readonly ipvasService: IpvasService) {}

  @Post()
  create(@Body() createIpvaDto: CreateIpvaDto) {
    return this.ipvasService.create(createIpvaDto);
  }

  @Get()
  findAll() {
    return this.ipvasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ipvasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIpvaDto: UpdateIpvaDto) {
    return this.ipvasService.update(+id, updateIpvaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ipvasService.remove(+id);
  }
}
