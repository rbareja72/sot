import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {Subscription, timer} from "rxjs/index";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  time: string;
  test: Subscription;
  subs: Subscription;
  constructor(public authService: AuthService, private router: Router) { }

  ngAfterViewInit(){
    console.log('init');
  }

  ngOnInit() {
    this.time = '30 : 00';
    this.test = this.authService.testStart.subscribe(
      (val: boolean) => {
        if(val === true){
          this.subs = timer(10, 1000).subscribe((value) => {
            if (value === 1800) {
              this.authService.logout();
              this.router.navigate(['/login']);
            }
            const rem = 1800 - value;
            this.time =
              (Math.floor(rem / 60) < 10 ? '0' + Math.floor(rem / 60) : Math.floor(rem / 60))
              +
              ' : ' + ((rem % 60) < 10 ? '0' + rem % 60 : rem % 60);
          });
        }else{
          this.subs.unsubscribe();
          this.time = '30 : 00';
        }
      }
    );
  }

  ngOnDestroy(){
    console.log("Destroyed");
    this.test.unsubscribe();
    this.subs.unsubscribe();
  }

  submit(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
