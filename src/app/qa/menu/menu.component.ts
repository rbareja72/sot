import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {QaService} from "../qa.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnChanges {

  public questions = this.qaService.getQuestions();
  public q = 0;
  public tick = '/assets/tick-512.png';
  public warn = '/assets/orange-warning-icon-3.png';

  constructor(private route: ActivatedRoute, private router: Router, private qaService: QaService) { }


  ngOnChanges(){

  }
}
