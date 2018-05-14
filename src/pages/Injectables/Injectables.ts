import { Injectable } from '@angular/core';



@Injectable()
export class Table {

  constructor(
    public validInputs: boolean,
    public modify: boolean,
    
  ) {modify=false; validInputs=false}

  changeMode() {
    this.modify = !this.modify;
  }
  submitInputs() {
    this.validInputs = !this.validInputs;
  }
}
