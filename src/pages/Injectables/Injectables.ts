import { Injectable } from '@angular/core';



@Injectable()
export class Table {

  constructor(
    public validInputs: boolean,
    public modify: boolean,
    
  ) {modify=false; validInputs=false}

  public changeModify() {
    this.modify = !this.modify;
  }
  public submitInputs() {
    this.validInputs = !this.validInputs;
  }
}
