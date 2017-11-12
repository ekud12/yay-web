import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class SharedRouterService implements OnInit {
  enterON = false;

  ngOnInit(){

  }

  public changeStatusToOn(){
    this.enterON = true;
  }

}