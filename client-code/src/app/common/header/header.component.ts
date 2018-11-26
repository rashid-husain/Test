import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class  HeaderComponent implements OnInit {
  routerUrl: string;
  userId: any;
  userName: String;
  @Output() sendUserName: String;
  constructor(public router: Router, private authService: AuthService, private activateRoute: ActivatedRoute) {
    this.routerUrl = router.url;
    console.log('Constructor', this.routerUrl);
  }

  ngOnInit() {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
