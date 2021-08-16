import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle/lib/angular-user-idle.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private userIdleService: UserIdleService
  ) {}
  ngOnInit() {
    this.checkUserLoggedInStatus();
  }

  checkUserLoggedInStatus() {
    // check with API call or localStorage for login status on refresh or revisit.
    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
    if (loginStatus !== undefined && loginStatus !== null) {
      this.authService.updateLoginStatus(loginStatus);
      this.userIdleService.startWatching();
      this.router.navigate(['/dashboard']);
    } else {
      this.authService.updateLoginStatus(false);
      this.router.navigate(['/home']);
    }
  }
}
