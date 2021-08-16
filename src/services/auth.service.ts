import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  getLoginStatus(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }

  updateLoginStatus(status: boolean) {
    localStorage.setItem('loginStatus', status.toString());
    this.loginStatus.next(status);
  }
}
