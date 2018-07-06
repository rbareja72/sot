import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {timer} from "rxjs/index";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {


  }

}
