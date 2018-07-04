import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public status: number;

  constructor(private router: Router, private authService: AuthService) { }

  onSignIn(form: NgForm){
    const roll = form.value.roll;
    const password = form.value.password;
    if (roll === '' || password === ''){
      this.status = -3;
      return;
    }
    this.status = this.authService.login(roll, password);
    console.log(this.status);
    if (this.status === 1){
      this.router.navigate(['/home']);
    }
  }

}
