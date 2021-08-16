import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle/lib/angular-user-idle.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private userIdleService: UserIdleService
  ) {}

  ngOnInit() {}

  login() {
    //api call to authenticate user;
    // post that if user is authenticated successfully then update the login status accordingly
    console.log('login');
    this.authService.updateLoginStatus(true);
    setTimeout(() => {
      this.userIdleService.startWatching();
      this.router.navigate(['/dashboard']);
      console.log('redirecting to dashboard');
    }, 1000);
  }
}
