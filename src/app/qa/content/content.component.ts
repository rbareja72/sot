import { Component, OnInit } from '@angular/core';
import {QuestionModel} from "../question.model";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  qa1: QuestionModel = {
    question: 'What\'s the name of standard input and output file in C?',
    optionA: 'stdio.h',
    optionB: 'conio.h',
    optionC: 'stdlib.h',
    optionD: 'None of the above',
    selected: '',
  };
  qa: QuestionModel = {
    question: 'What\'s the output of this program?\n' +
    '#include<stdio.h>\n' +
    '#include<conio.h>\n' +
    'void main()\n' +
    '{\n' +
    '\tint a=10,i;\n' +
    '\tfor(i=0;i<a;i++){\n' +
    '\t\tprintf("%d",a);\n' +
    '\t}\n' +
    '\tgetch();\n' +
    '}',
    optionA: 'stdio.h',
    optionB: 'conio.h',
    optionC: 'stdlib.h',
    optionD: 'None of the above',
    selected: '',
  };

  constructor() { }

  ngOnInit() {
  }

}
