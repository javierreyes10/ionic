import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public eliteApi: EliteApi,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournamets...'
    });

    loader.present().then(() => {
        this.eliteApi.getTournaments().subscribe(result => {
              this.tournaments = result.json();
        });
        loader.dismiss();
    });

    

    console.log('ionViewDidLoad TournamentsPage');
  }

  itemTapped($event, tourney){
    this.navCtrl.push(TeamsPage, tourney);
  }

}
