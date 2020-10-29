import Dexie from 'dexie';
import relationship from 'dexie-relationships';

interface Exam {
    id: number;
    name: string;
    number: string;
    correct: number;
}

interface Question {
    id: number;
    question: string;
    examId: number;
    explanation: string;
    isCorrect: boolean;
}

interface Answer {
    id: number;
    questionId: number;
    isSelected: boolean;
    choice: string;
}

class ExamDatabase extends Dexie {
    exams: Dexie.Table<Exam, number>;
    questions: Dexie.Table<Question, number>;
    answers: Dexie.Table<Answer, number>;

    constructor(){
        super("ExamDatabbase");
        this.version(1).stores({
            exams: "id,name,number,correct",
            questions: "id, question, examId, explanation, isCorrect",
            answers: "id, questionId, isSelected, choice"
        })
    }
}

const db = new ExamDatabase();
// _, {addons: [relationship]}

export default db;