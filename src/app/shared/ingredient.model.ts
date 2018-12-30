export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}


/*Equivalent typescript shortcut for constructor and value initialization */
/*export class Ingredient {
    constructor(public name: string, public amount: number) {

    }
}*/