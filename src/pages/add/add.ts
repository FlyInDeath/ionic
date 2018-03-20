import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  public todoList: Array<any>;
    public todoTitle: string;
    public todoDes: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todoList = JSON.parse(localStorage.getItem("arrDoList"));
        if(!this.todoList) {
            this.todoList = [];
        }
        this.todoTitle = "";
        this.todoDes = ""; // description
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  save() {
    if(this.todoTitle != "" && this.todoDes != "") {
        this.todoList.push(
          {
            title: this.todoTitle,
            des: this.todoDes
          } 
        );
        localStorage.setItem("arrDoList", JSON.stringify(this.todoList));
        this.navCtrl.pop();
    } else if(this.todoTitle == "") {
        alert("No Title!"); 
    } else if(this.todoDes == ""){
        alert("No Description!");
    }
  }

}
