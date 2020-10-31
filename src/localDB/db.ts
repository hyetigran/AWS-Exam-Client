import Dexie from 'dexie';

import {
    Answer, Question, Exam
} from './model'

class ExamDatabase extends Dexie {
    public exams: Dexie.Table<Exam, number>
    public questions: Dexie.Table<Question, number>;
    public answers: Dexie.Table<Answer, number>;

    constructor(){
        super("ExamDatabase");
        const db = this
        db.version(1).stores({
            exams: "&gid, examNumber, examType, correct, currentQuestion, time, isPaused",
            questions: "&gid, examId, question, explanation, isMultipleChoice",
            answers: "&gid, questionId, type, choice, isSelected, isCorrect"
        })

        db.exams.mapToClass(Exam)
        db.questions.mapToClass(Question)
        db.answers.mapToClass(Answer)
    }
}

export const db = new ExamDatabase();