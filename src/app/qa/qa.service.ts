import {QuestionModel} from "./qa.model";

export class QaService{

  questions: QuestionModel[] = [
    new QuestionModel('What\'s the output of this program?\n' +
      '#include<stdio.h>\n' +
      '#include<conio.h>\n' +
      'void main()\n' +
      '{\n' +
      '\tint a=10,i;\n' +
      '\tfor(i=0;i<a;i++)\n\t{\n' +
      '\t\tprintf("%d",a);\n' +
      '\t}\n' +
      '\tgetch();\n' +
      '}',
      'stdio.h',
      'conio.h',
      'stdlib.h',
      'None of the above',
      '',
      false
    ),
    new QuestionModel(
      'A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?',
      '120 metres',
      '180 metres',
      '324 metres',
      '150 metres',
      '',
      false
    ),
    new QuestionModel(
      'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going,' +
      ' in 10 seconds. The speed of the train is:',
      '45 km/hr',
      '50 km/hr',
      '54 km/hr',
      '55 km/hr',
      '',
      false
    ),
    new QuestionModel(
      'The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds,' +
      ' is:',
      '200 m',
      '225 m',
      '245 m',
      '250 m',
      '',
      false
    ),
    new QuestionModel(
      'Two trains running in opposite directions cross a man standing on the platform in 27 seconds ' +
      'and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
      '1 : 3',
      '3 : 2',
      '3 : 4',
      'None of these',
      '',
      false
    )
  ];

  getQuestions(){
    return this.questions;
  }

  getNumberOfQuestions(): number{
    return this.questions.length;
  }

  getQuestion(i: number): QuestionModel{
    return this.questions[i];
  }

  setSelected(q: number, value: string){
    this.questions[q].selected = value;
  }

  setFlagged(q: number, value: boolean){
    this.questions[q].flagged = value;
  }

}
