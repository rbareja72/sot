import { Component, OnInit } from '@angular/core';
import {QuestionModel} from "../Question.model";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  qa: QuestionModel = {
    question: 'qwda',
    optionA: 'asfaf',
    optionB: 'asfaf',
    optionC: 'asfaf',
    optionD: 'asfaf',
    selected: 'b',
  };

  constructor() { }

  ngOnInit() {
  }

}
