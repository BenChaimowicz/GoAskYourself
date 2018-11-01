"use strict";
var Questions = /** @class */ (function () {
    function Questions() {
    }
    Questions.AddQuestionToHistory = function (q) {
        Questions._QuestionHistory.push(q);
    };
    Questions._QuestionHistory = [];
    return Questions;
}());
