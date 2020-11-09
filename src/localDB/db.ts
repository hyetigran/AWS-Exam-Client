import Dexie from "dexie";

// import { Answer, Question, Exam } from "./model";

// class ExamDatabase extends Dexie {
//   public exams: Dexie.Table<Exam, string>;
//   public questions: Dexie.Table<Question, string>;
//   public answers: Dexie.Table<Answer, string>;

//   constructor() {
//     super("ExamDatabase");
//     const db = this;
//     db.version(1).stores({
//       exams:
//         "&gid, examNumber, examType, correct, currentQuestion, time, isPaused",
//       questions: "&gid, examId, question, explanation, isMultipleChoice",
//       answers: "&gid, questionId, choice, isSelected, isCorrect",
//     });

//     debugger;
//     db.exams.mapToClass(Exam);
//     db.questions.mapToClass(Question);
//     db.answers.mapToClass(Answer);
//   }
// }

// export const db = new ExamDatabase();
