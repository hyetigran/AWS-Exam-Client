import { Exam, Question, Answer } from "./model";

/**
 * Delete the entire database
 */
export async function deleteDatabase(db: any) {
  await db.delete();
}

/**
 * Open a  database
 */
export async function openDatabase(db: any) {
  await db.open();
}

/**
 * Clear all tables
 */
export async function clearAllTables(db: any) {
  await Promise.all([
    db.exams.clear(),
    db.questions.clear(),
    db.answers.clear(),
  ]);
}

/**
 * Read all exams
 */
export async function readAllExams(db: any) {
  return await db.exams.toArray();
}

/**
 * Read all exams
 */
export async function readAllCompletedExams(db: any) {
  return await db.exams.where("isFinished").equals(1).toArray();
}

/**
 * Delete all exams
 */
export async function deleteAllExams(db: any) {
  return await db.exams.clear();
}

/**
 * Create a exam
 *
 * Note that since the exam is guaranteed
 * to have a unique ID we are using `put`
 * to update the databse.
 */
export async function createExam(db: any, exam: Exam): Promise<string> {
  return await db.exams.put(exam);
}

/**
 * Read a exam
 */
export async function readExam(db: any, examGID: string): Promise<Exam> {
  return await db.exams.get(examGID);
}

/**
 * Update exam
 */
export async function updateExam(db: any, exam: Exam) {
  return await db.exams.put(exam);
}

/**
 * Delete exam
 */
export async function deleteExam(db: any, exam: Exam) {
  return await db.exams.where("gid").equals(exam.gid).delete();
}

/**
 * Read all questions
 */
export async function readAllQuestions(db: any) {
  return await db.questions.toArray();
}

/**
 * Delete all questions
 */
export async function deleteAllQuestions(db: any) {
  return await db.questions.clear();
}

/**
 * Create question record
 *
 * Note that since the Question instance
 * is guaranteed
 * to have a unique ID we are using `put`
 * to update the databse.
 */
export async function createQuestion(db: any, question: Question) {
  return await db.questions.put(question);
}

/**
 * Update an question record
 */
export async function updateQuestion(db: any, question: Question) {
  return await db.questions.put(question);
}

/**
 * Delete exam
 */
export async function deleteQuestion(db: any, question: Question) {
  await db.questions.where("gid").equals(question.gid).delete();
}

/**
 * Read all answer records
 */
export async function readAllAnswers(db: any) {
  return await db.answers.toArray();
}

/**
 * Delete all answers
 */
export async function deleteAllAnswers(db: any) {
  return await db.answers.clear();
}

/**
 * Create answer record
 */
export async function createAnswer(db: any, answer: Answer) {
  return await db.answers.put(answer);
}

/**
 * Update the answer record
 */
export async function updateAnswer(db: any, answer: Answer) {
  return await db.answers.put(answer);
}

/**
 * Delete the answer
 */
export async function deleteAnswer(db: any, answer: Answer) {
  await db.answers.where("gid").equals(answer.gid).delete();
}

/**
 * Load question records and
 * update the corresponding exam fields.
 */
export async function loadExamQuestions(
  gid: string,
  db: any
): Promise<Question[]> {
  return await db.questions.where("examId").equals(gid).toArray();
}

/**
 * Load answer and
 * update the corresponding question fields.
 */
export async function loadQuestionAnswers(
  gid: string,
  db: any
): Promise<Answer[]> {
  return await db.answers.where("questionId").equals(gid).toArray();
}

/**
 * Load navgiation properties (Question records) and
 * update the corresponding exam fields.
 */
export async function loadQuestionProperties(db: any, exam: Exam) {
  [exam.questions] = await Promise.all([
    db.questions.where("examId").equals(exam.gid).toArray(),
  ]);
}

/**
 * Load navgiation properties (Answer records) and
 * update the corresponding Question fields.
 */
export async function loadAnswerProperties(db: any, question: Question) {
  [question.answers] = await Promise.all([
    db.answers.where("questionId").equals(question.gid).toArray(),
  ]);
}

/**
 * Save a exam entity.  If question or answer records
 * were removed from the exam, then these will also
 * be deleted from the database.
 */
export async function saveExam(db: any, exam: Exam, question: Question) {
  return db.transaction("rw", db.exams, db.questions, db.answers, async () => {
    // Add or update exam. If add, record exam.id.
    exam.gid = await db.exams.put(exam);

    // Save all navigation properties (array of questions and answers)
    // Some may be new and some may be updates of existing objects.ß
    // put() will handle both cases.
    // (record the result keys from teh put() operations into questionIds and answerIds
    // so that we can find local deletes)
    let [questionIds, answerIds] = await Promise.all([
      Promise.all(
        exam.questions.map((question) => updateQuestion(db, question))
      ),
      Promise.all(question.answers.map((answer) => updateAnswer(db, answer))),
    ]);

    // Was any email or answer deleted from out navigation properties?
    // Delete any item in DB that reference us, but is not present
    // in our navigation properties:
    await Promise.all([
      db.questions
        .where("examId")
        .equals(exam.gid) // references us
        .and((question: { id: any }) => questionIds.indexOf(question.id) === -1) // Not anymore in our array
        .delete(),

      db.answers
        .where("questionId")
        .equals(question.gid)
        .and((answer: { id: any }) => answerIds.indexOf(answer.id) === -1)
        .delete(),
    ]);
  });
}
