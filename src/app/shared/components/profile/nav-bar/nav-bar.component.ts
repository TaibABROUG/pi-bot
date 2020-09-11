import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 iduser: String ; 
 currentUser: Object = {};
 first_2_Carac: String;
  constructor(public authService: AuthService,               private actRoute: ActivatedRoute,
    public router : Router) {
      this.iduser= this.actRoute.snapshot.paramMap.get('id_user');
      this.authService.getUserProfile(this.iduser).subscribe(res => {
        this.currentUser = res.msg;
        this.first_2_Carac= res.msg.name.charAt(0).toUpperCase()+res.msg.name.substring(0,2).slice(1);;
      })
     }

  ngOnInit() {
  }
  logout(){
    this.authService.doLogout() ; 
  }
}
