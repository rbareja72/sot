import { Component, OnInit } from '@angular/core';
import {QuestionModel} from "../qa.model";
import {QaService} from "../qa.service";
import {ActivatedRoute, Params} from "@angular/router";
import {NgForm} from "@angular/forms";

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
    this.q = this.route.snapshot.queryParams['q'] - 1;
    this.qa = this.qaService.getQuestion(this.q);
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.q = params['q'] - 1;
        this.qa = this.qaService.getQuestion(this.q);
      }
    );
  }

  change(form: NgForm): void{
    console.log(form.value);
    this.qaService.setSelected(this.q, form.value.option);
  }

}
