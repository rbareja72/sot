import { Component, OnInit } from '@angular/core';
import {QuestionModel} from "../qa.model";
import {QaService} from "../qa.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  qa: QuestionModel = null;
  q: number;

  constructor(private qaService: QaService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    //console.log(this.route.snapshot.queryParams['q']);
    this.qa = this.qaService.getQuestion(this.route.snapshot.queryParams['q'] - 1);
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.q = params['q']-1;
        this.qa = this.qaService.getQuestion(this.q);
      }
    );
    //console.log(this.qa.question);
  }

}
