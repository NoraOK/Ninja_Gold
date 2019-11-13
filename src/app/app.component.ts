import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninjaGold';
  gold = 0;
  activityLog =[];

  addGold(num){
    this.gold +=num;
  }
  addFarmGold(){
    var num = Math.floor(Math.random()*3)+2;
    console.log("this is the num"+num);
    this.addGold(num);
    this.activityLog.unshift("You earned "+num+" gold from the Farm.")
  }
  addCaveGold(){
    var num = Math.floor(Math.random()*5)+5;
    this.addGold(num);
    this.activityLog.unshift("You earned "+num+" gold from the Cave.")
  }
  addHouseGold(){
    var num = Math.floor(Math.random()*8)+7;
    this.addGold(num);
    this.activityLog.unshift("You earned "+num+" gold from the House.")
  }
  addCasinoGold(){
    var num = Math.floor(Math.random()*200)-100;
    this.addGold(num);
    if(num<0){
      this.activityLog.unshift("You are a loser. You lost "+num+" gold at the Casino.")
    }else{
    this.activityLog.unshift("You earned "+num+" gold from the Casino.")
  }}
  resetGold(){
    this.gold=0;
  }

  constructor(private _httpService: HttpService) { }


}
