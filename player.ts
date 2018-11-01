enum Gender{
    Male = 0,
    Female = 1,
    Other = 2
}

class Player {
    private _name: string;
    private _gender: Gender;
    private _age: number;
    private _score: number;
    private _imageURL: string;

    constructor() {
        
    }

    public set name(name: string) {
        this._name = name;
    }
    public get name(): string{
        return this._name;
    }

    public set age(age: number) {
        if (age > 0 && age < 120)
            this._age = age;
    }
    public get age(): number{
        return this._age;
    }

    public changeScore(amount: number) {
        this._score += amount;
    }
    public get score(): number{
        return this._score;
    }
}