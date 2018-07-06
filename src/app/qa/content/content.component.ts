import { Component, OnInit } from '@angular/core';
import {QuestionModel} from "../qa.model";
import {QaService} from "../qa.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  qa: QuestionModel = null;
  q: number;
  n: number;
  constructor(private qaService: QaService, private route: ActivatedRoute, private  router: Router) {

  }

  ngOnInit() {
    this.n = this.qaService.getNumberOfQuestions();
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
    this.qaService.setSelected(this.q, form.value.option);
  }

  flag(): void{
    this.qaService.setFlagged(this.q, !this.qa.flagged);
  }

  next(): void{
    this.router.navigate(['/qa'],{queryParams:{'q': this.q + 2}});
  }

  previous(): void{
    this.router.navigate(['/qa'],{queryParams:{'q': this.q}});
  }


}
