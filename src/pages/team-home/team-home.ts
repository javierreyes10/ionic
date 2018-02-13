import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StandingsPage, TeamDetailPage} from '../pages'

/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
  template: `
    <ion-tabs>
      <ion-tab tabIcon="basketball" [root]="teamDetailTab"></ion-tab>
      <ion-tab tabIcon="podium" [root]="standingsTab"></ion-tab>
    </ion-tabs>`
})
export class TeamHomePage {

  teamDetailTab: any;
  standingsTab: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.teamDetailTab = TeamDetailPage;
    this.standingsTab = StandingsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

}
