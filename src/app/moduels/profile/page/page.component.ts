import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  currentUser: Object = {};

  constructor(   public authService: AuthService,
    private actRoute: ActivatedRoute)  {
      let id = this.actRoute.snapshot.paramMap.get('id_user');
      this.authService.getUserProfile(id).subscribe(res => {
        this.currentUser = res.msg;
      })
    }

  ngOnInit() {
  }

}
