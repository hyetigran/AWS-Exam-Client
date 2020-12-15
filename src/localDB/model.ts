import cuid from "cuid";

export abstract class AbstractEntity {
  constructor(public gid?: string) {
    gid ? (this.gid = gid) : (this.gid = cuid());
  }
  equals(e1: AbstractEntity, e2: AbstractEntity) {
    return e1.gid === e2.gid;
  }
}

export class Answer extends AbstractEntity {
  constructor(
    public questionId: string,
    public choice: string,
    public isSelected: number,
    public isCorrect: number,
    gid?: string
  ) {
    super(gid);
  }
}

export class Question extends AbstractEntity {
  answers: Answer[];

  constructor(
    public examId: string,
    public question: string,
    public explanation: string,
    public isMultipleChoice: number,
    gid?: string
  ) {
    super(gid);

    Object.defineProperties(this, {
      answers: { value: [], enumerable: false, writable: true },
    });
  }
}

export class Exam extends AbstractEntity {
  questions: Question[];

  constructor(
    public examNumber: string,
    public examType: string,
    public correct: number,
    public currentQuestion: number,
    public time: string,
    public isPaused: number,
    public isFinished: number,
    gid?: string
  ) {
    super(gid);

    Object.defineProperties(this, {
      questions: { value: [], enumerable: false, writable: true },
    });
  }
}

export interface BareQuestion {
  question: string;
  explanation: string;
  isMultipleChoice: number;
  answers: BareAnswer[];
}

export interface BareAnswer {
  answerId: string;
  choice: string;
  isSelected: number;
  isCorrect: number;
}
