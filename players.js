"use strict";
var Players = /** @class */ (function () {
    function Players() {
    }
    Players.addPlayer = function (newplayer) {
        Players._PlayerList.push(newplayer);
    };
    Players._PlayerList = [];
    return Players;
}());
