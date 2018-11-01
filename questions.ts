class Questions {
    private static _QuestionHistory: Question[] = [];

    private static AddQuestionToHistory(q: Question) {
        Questions._QuestionHistory.push(q);
    }
}