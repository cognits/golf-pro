import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayersPage } from '../players/players';
import { NoteListPage } from '../note-list/note-list';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the PlayerProfileLockerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-profile-locker',
  templateUrl: 'player-profile-locker.html',
})
export class PlayerProfileLockerPage {
  profile_locker: string = "profile";
  PersonInfo: any;
  IdPerson = ''
   lineChartData = [];
   objects = {}
   prueba ={}
   prueba2 = {}
   prueba3 = {}
   prueba4 = {}
   prueba5 = {}
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HTTP) {

  }

  back_to_players(){
    this.navCtrl.pop();
  }

  go_notes(){
    this.navCtrl.push(NoteListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerProfileLockerPage');
    var ids = this.navParams.get('id')
    this.http.get('https://staging-api.junior.golf/v1/users/players/'+ids, {}, {'Content-Type':'application/json','Authorization':'Bearer wCzcFFThlbhsExG3lLX3RGSL7qYBEk','X-MLG-Api':'61fb380fa50d7d03cd18148bc3d1ba70ab1b3522'})
   .then(datas => {
    // alert('succes')
     // alert(data)
    //  alert(JSON.stringify(datas))
    // alert(JSON.stringify(datas.data))
     ///this.PersonInfo = JSON.parse(JSON.stringify(datas)).data
     this.PersonInfo = JSON.parse(datas.data)
     // alert(typeof JSON.parse(this.PersonInfo))
     // alert(typeof new Object(this.PersonInfo))
     // this.PersonInfo = new Object(this.PersonInfo)
     // alert(typeof this.PersonInfo

     this.objects =  {
        "id":this.PersonInfo.id,
        "created_date":this.PersonInfo.created_date,
        "first_name":this.PersonInfo.first_name,
        "last_name":this.PersonInfo.last_name,
        "birthday":this.PersonInfo.birthday,
        "age":this.PersonInfo.age,
        "system":this.PersonInfo.sports.golf.tags.system,
        "custom":this.PersonInfo.sports.golf.tags.custom,
        "profile_pic_url":this.PersonInfo.profile_pic_url,
        "status":this.PersonInfo.status,
        "email":this.PersonInfo.email,
        "phone_number":this.PersonInfo.phone_number,
        "last_login":this.PersonInfo.last_login,
        "message_count":this.PersonInfo.message_count,
        "last_messaged":this.PersonInfo.last_messaged
      }
    //   alert(typeof this.PersonInfo.sports)
    //   alert(JSON.parse(datas.data).sports)
    //  alert(JSON.stringify(this.PersonInfo.sports))
    //  alert(this.PersonInfo.sports.golf.tags.system)
    //  alert(this.PersonInfo.sports.golf.experience_level)
    //  this.prueba =  JSON.parse(datas.data.sports)
    //  //this.prueba2 = JSON.parse(JSON.stringify(this.prueba))
    // // this.prueba3 = JSON.parse(this.prueba2.tags)
    //   //this.prueba4 = JSON.parse(this.prueba3.system)
    //  //.system
    //  alert(this.prueba)


     // this.lineChartData.push(this.PersonInfo)
     // this.lineChartData[0] = JSON.parse(this.lineChartData[0])
     //alert(this.lineChartData)
    // this.objects['id'] = this.lineChartData[0].id
    // alert(JSON.parse(this.lineChartData[0]))
  //   this.IdPerson = JSON.stringify(datas.data)
    // this.groceri   es = data.data.results
     // console.log(data.status);
     // console.log(data.data); // data received by server
     // console.log(data.headers);

   })
   .catch(error => {
     // alert('errors')
     // alert(JSON.stringify(error))
     // console.log(error)
     // console.log(error.status);
     // console.log(error.error); // error message as string
     // console.log(error.headers);

   });
    //alert(this.navParams.get('id'))
  }

}
