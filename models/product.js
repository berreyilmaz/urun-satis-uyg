const products = [{id:"13213", name:'Iphone 6',price:'10000', imageUrl:'1.jpeg',description:'iyi telefon'},
    {id:"13214", name:'Iphone 11',price:'30000', imageUrl:'2.jpeg',description:'daha iyi telefon'},
    {id:"13215", name:'Iphone 14 pro',price:'80000', imageUrl:'3.jpeg',description:'çok daha iyi telefon'}
];

module.exports=class Product {
    constructor(name, price, imageUrl, description) {
        this.id = (Math.floor(Math.random()*99999)+1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    saveProduct(){
        products.push(this);
    }

    static getAll() {
        return products;
    }

    static getById(id) {
        const product = products.find(i => i.id === id);
        return product;
    }

    static Update(product) {
        const index = products.findIndex(i=>i.id===product.id);

        products[index].name = product.name;
        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
    }

    static DeleteById(id) {
        const index = products.findIndex(i=> i.id === id);
        products.splice(index,1);
    }
}


