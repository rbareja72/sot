import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnChanges {

  public questions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  public q = 1;
  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnChanges(){
    this.q = this.route.snapshot.params['q'];
  }
}
