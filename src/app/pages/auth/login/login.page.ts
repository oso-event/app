import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService, private  router: Router) { }

  ngOnInit() {
  }

  login(form) {
    this.authService.login().then((res) => {
      this.router.navigateByUrl('home');
    });
  }

}
