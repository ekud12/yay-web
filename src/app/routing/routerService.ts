import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class SharedRouterService implements OnInit {
  enterON = false;

  ngOnInit(){
    console.log("YAY");
  }

  public changeStatusToOn(){
    this.enterON = true;
    console.log(this.enterON);
  }

}