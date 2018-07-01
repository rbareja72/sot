export class QuestionModel{
  public question: string;
  public optionA: string;
  public optionB: string;
  public optionC: string;
  public optionD: string;
  public selected: string;
  constructor(q: string, a: string, b: string, c: string, d: string, s: string){
    this.question = q;
    this.optionA = a;
    this.optionB = b;
    this.optionC = c;
    this.optionD = d;
    this.selected = s;
  }
}
