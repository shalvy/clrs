import { Injectable } from '@angular/core';

@Injectable()
export class DataService {


  subsidiaries = [' Sam ', ' John ']


  constructor() { }

  getSubsidiaries(){
    return this.subsidiaries;
  }

  addSubsidiary(subsidiaryName){
    this.subsidiaries.push(subsidiaryName)

  }

}
