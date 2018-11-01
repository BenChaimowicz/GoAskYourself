"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
var Player = /** @class */ (function () {
    function Player() {
    }
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (age > 0 && age < 120)
                this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.changeScore = function (amount) {
        this._score += amount;
    };
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
