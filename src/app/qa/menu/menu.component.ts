import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public questions = [1,2,3,4,5,6,7,8,10];//,11,12,13,14,15,16,17];
  public q = 0;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.q = this.route.snapshot.params['q'];
  }

}
