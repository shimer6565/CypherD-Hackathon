import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Delete, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


@Get('/getFromCovalentHQ')
getCovalent() {
   return this.appService.fetchCovalent();
}

@Get('/coins')
getMasterCoins() {
   return this.appService.getCoins();
}

@Post('addWatchList')
createWatchList() {
  const data = { tokensToBeAdded: [ "matic-network"] }
   return this.appService.createWatchList(data);
}

@Delete('delete/:id')
  async deleteListById(@Param('id', ParseIntPipe) id: number) {
    await this.appService.deleteList(id);
  }

@Get('get/:id')
getById() {
  return this.appService.getById(id);
}
}
