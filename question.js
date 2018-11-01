"use strict";
var Topic;
(function (Topic) {
})(Topic || (Topic = {}));
var Question = /** @class */ (function () {
    function Question() {
        this._date = new Date();
    }
    Object.defineProperty(Question.prototype, "question", {
        get: function () {
            return this._content;
        },
        set: function (q) {
            this._content = q;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "answer", {
        get: function () {
            return this._answer;
        },
        set: function (a) {
            this._answer = a;
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}());
