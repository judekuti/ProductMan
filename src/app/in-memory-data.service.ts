import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService {

    createDb(){
        const products =
        [{
        id: 1,
        name:"Tripod Stand",
        price: 200,
        category: "Support Aparatus"
    },
    {
        id: 2,
        name: "Testtube Rack",
        price: 40,
        category: "Support Aparatus"
    },
    {
        id: 3,
        name: "Conical Flask",
        price: 50,
        category: "Measuring Aparatus"
    }];
    return { products}

    }

  constructor() { }

}
