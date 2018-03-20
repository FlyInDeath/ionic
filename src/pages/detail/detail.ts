import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public title: string;
  public description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let id: number = navParams.get('id');
    let todoList: any = JSON.parse(localStorage.getItem("arrDoList"));
    this.title = todoList[id].title;
    this.description = todoList[id].des;
    console.log(this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  close(){
    this.navCtrl.pop();
  }

}

