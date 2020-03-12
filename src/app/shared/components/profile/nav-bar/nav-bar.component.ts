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
  constructor(public authService: AuthService,               private actRoute: ActivatedRoute,
    public router : Router) {
      this.iduser= this.actRoute.snapshot.paramMap.get('id_user');
     }

  ngOnInit() {
  }
  logout(){
    this.authService.doLogout() ; 
  }
}
