enum Topic {

}

class Question {
    private _content: string;
    private _answer: string;
    private _asker: Player;
    private _topic: Topic;
    private _date: Date;

    constructor() {
        this._date = new Date();
    }

    public set question(q: string) {
        this._content = q;
    }
    public get question() : string{
        return this._content;
    }

    public set answer(a: string) {
        this._answer = a;
    }
    public get answer(): string{
        return this._answer;
    }
}