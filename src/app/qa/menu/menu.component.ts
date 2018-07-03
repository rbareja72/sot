import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QaService} from "../qa.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnChanges {

  public questions = this.qaService.getQuestions();
  public q = 1;
  constructor(private route: ActivatedRoute, private router: Router, private qaService: QaService) { }


  ngOnChanges(){
    this.q = this.route.snapshot.queryParams['q'];
  }
}
