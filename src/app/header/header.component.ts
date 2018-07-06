import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {Subscription, timer} from "rxjs/index";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  time: string;
  test: Subscription;
  subs: Subscription;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.test = this.authService.testStart.subscribe(
      (val: boolean) => {
        if(val === true){
          this.subs = timer(1000, 1000).subscribe((value) => {
            if (value === 60) {
              this.authService.logout();
              this.router.navigate(['/login']);
              this.subs.unsubscribe();
            }
            const rem = 60 - value;
            this.time =
              (Math.floor(rem / 60) < 10 ? '0' + Math.floor(rem / 60) : Math.floor(rem / 60))
              +
              ' : ' + ((rem % 60) < 10 ? '0' + rem % 60 : rem % 60);
          });
        }
      }
    );
  }

  ngOnDestroy(){
    this.test.unsubscribe();
    this.subs.unsubscribe();
  }

  submit(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
