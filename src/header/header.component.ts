import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  isUserLoggedIn: boolean;
  ngOnInit() {
    this.authService.getLoginStatus().subscribe(status => {
      this.isUserLoggedIn = status;
    });
  }

  logout() {
    //api call to logout user;
    // post that if user is loggedout successfully then update the login status accordingly and clear all cookies and local storages
    console.log('logging out');
    localStorage.clear();
    this.authService.updateLoginStatus(false);
    this.router.navigate(['/home']);
  }
}
