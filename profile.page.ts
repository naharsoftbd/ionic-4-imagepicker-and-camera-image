import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Http } from '@angular/http';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public userData : any;
  public updateinfo: any;
  childcount: any;
  child: any;
  childname: any;
  public myid : any;

  constructor(
  	public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public http: Http,
    public auth: AuthenticationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.myid = this.activatedRoute.snapshot.paramMap.get('myid');
  		 
     this.updateinfo = {};
    
    var apiHost = this.auth.getApiurl('getprofile/'+this.myid); 
    this.http.get(apiHost)
    .subscribe((res) => {
    	this.updateinfo = res.json();     

  });

}
}
