import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyTeamsPage, TeamsPage} from '../pages'
import { EliteApi } from '../../shared/shared'
/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

 tournaments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    this.eliteApi.getTournaments().subscribe(result => {
      console.log(result.json());
      this.tournaments = result.json();
    });

    console.log('ionViewDidLoad TournamentsPage');
  }

  itemTapped($event, tourney){
    this.navCtrl.push(TeamsPage, tourney);
  }

}
