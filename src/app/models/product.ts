export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, imageUrl = 'https://www.pinclipart.com/picdir/middle/173-1730850_contract-clipart-procurement-procurement-icon-png-download.png'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        imageUrl = imageUrl
    }
}
