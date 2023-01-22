export class Rates {
    name!:string;
    price!:number;
    description!:string;
    id!: number;
    features!:[
        first:string,
        second:string,
        third:string,
    ];

    constructor(name:string, price:number = 0, description:string = ' ', id:number, features:[string,string,string] = [' ',' ',' ']) {
        this.name = name
        this.description = description
        this.price = price
        this.features = features
    }
}