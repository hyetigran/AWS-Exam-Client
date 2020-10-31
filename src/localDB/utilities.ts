import { Exam, Question, Answer } from "./model";

import cuid from "cuid";

export async function deleteDatabase(db) {
  await db.delete();
}

export async function openDatabase(db) {
  await db.open();
}

export async function clearAllTables(db) {
  await Promise.all([
    db.exams.clear(),
    db.questions.clear(),
    db.answers.clear(),
  ]);
}

export async function readAllExams(db) {
  return await db.exams.toArray();
}

export async function deleteAllExams(db) {
  return await db.exams.clear();
}

export async function createExam(db, exam: Exam): Promise<string> {
  return await db.exams.put(exam);
}

export async function readExam(db, examGID: string): Promise<Exam> {
  return await db.exams.get(examGID);
}

export async function updateExam(db, exam: Exam) {
  return await db.exam.put(exam);
}

export async function deleteExam(db, exam: Exam) {
  return await db.exams.where("gid").equals(exam.gid).delete();
}

export async function readAllQuestions(db) {
  return await db.questions.toArray();
}

export async function deleteAllQuestions(db) {
  return await db.questions.clear();
}

export async function createQuestion(db, question: Question) {
  return await db.questions.put(question);
}

export async function updateQuestion(db, question: Question) {
  return await db.questions.put(question);
}

export async function deleteQuestion(db, question: Question) {
  await db.questions.where("gid").equals(question.gid).delete();
}
export async function readAllAnswers(db) {
  return await db.answers.toArray();
}

export async function deleteAllAnswers(db) {
  return await db.answers.clear();
}

export async function createAnswer(db, answer: Answer) {
  return await db.answers.put(answer);
}

export async function updateAnswer(db, answer: Answer) {
  return await db.answers.put(answer);
}

export async function deleteAnswer(db, answer: Answer) {
  await db.answers.where("gid").equals(answer.gid).delete();
}

export async function loadExamQuestions(exam: Exam, db) {
  exam.questions = await db.questions
    .where("examId")
    .equals(exam.gid)
    .toArray();
}

export async function loadQuestionAnswers(question: Question, db) {
  question.answers = await db.answers
    .where("questionId")
    .equals(question.gid)
    .toArray();
}

export async function loadNavigationProperties(
  db,
  exam: Exam,
  question: Question
) {
  [question.answers, exam.questions] = await Promise.all([
    db.answers.where("questionId").equals(question.gid).toArray(),
    db.questions.where("examId").equals(exam.gid).toArray(),
  ]);
}

export async function saveExam(db, exam: Exam, question: Question) {
  return db.transaction("rw", db.exams, db.questions, db.answers, async () => {
    // Add or update exam. If add, record exam.id.
    exam.gid = await db.exams.put(exam);

    // Save all navigation properties (array of questions and answers)
    // Some may be new and some may be updates of existing objects.
    // put() will handle both cases.
    // (record the result keys from teh put() operations into questionIds and answerIds
    // so that we can find local deletes)
    let [questionIds, answerIds] = await Promise.all([
      Promise.all(
        exam.questions.map((question) => updateQuestion(db, question))
      ),
      Promise.all(question.answers.map((answer) => updateAnswer(db, answer))),
    ]);

    // Was any email or phone number deleted from out navigation properties?
    // Delete any item in DB that reference us, but is not present
    // in our navigation properties:
    await Promise.all([
      db.questions
        .where("examId")
        .equals(exam.gid) // references us
        .and((question) => questionIds.indexOf(question.id) === -1) // Not anymore in our array
        .delete(),

      db.answers
        .where("questionId")
        .equals(question.gid)
        .and((answer) => answerIds.indexOf(answer.id) === -1)
        .delete(),
    ]);
  });
}
