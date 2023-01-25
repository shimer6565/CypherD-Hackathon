import { Injectable } from '@nestjs/common';
import { CreateIdType, CreateWatchListType } from './utils/types';


interface Coins {
  id : string,
	symbol : string,
	name : string,
}

@Injectable()
export class AppService {

  fetchCovalent() {
    return fetch('https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=<ckey_c0cb6e86390f40ef872c5a783e8>')
            .then(res => res.json())
            .then(res => {
                    return res 
            })
  }

  getCoins(): Promise<Coins[]> {
    return fetch('https://api.coingecko.com/api/v3/coins/list')
            .then(res => res.json())
            .then(res => {
                    return res as Coins[]
            })
}

  createWatchList(newData : CreateWatchListType) {
    var watchList = JSON.parse("/WatchLists.json")
    this.watchList.save(newData)
    console.log(watchList)
  }

  deleteList(id : CreateIdType) {
    return this.watchList.delete({ id });
  }

  getById(id : CreateIdType) {
    return this.watchList.find({ id : id });
  }


}
