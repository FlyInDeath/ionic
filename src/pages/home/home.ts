import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from "../add/add";
import { DetailPage } from "../detail/detail";
import { FCM } from '@ionic-native/fcm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
    public todoList: Array<any> = [];
 
    constructor(private navCtrl: NavController, private fcm: FCM) { }
 
    ionViewDidEnter() {
        this.todoList = JSON.parse(localStorage.getItem("arrDoList"));
        console.log(this.todoList);
    }
 
    delete(index: number) {
        this.todoList.splice(index, 1);
        localStorage.setItem("arrDoList", JSON.stringify(this.todoList));
    }
 
    add() {
        this.navCtrl.push(AddPage);
    }

    detail(index: number){
        this.navCtrl.push(DetailPage, {
          id: index
        });
    }
 
}