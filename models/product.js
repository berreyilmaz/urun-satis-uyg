const products = [{id:"13213", name:'Iphone 6',price:'10000', imageUrl:'1.jpeg',description:'iyi telefon', categoryid:"1"},
    {id:"13214", name:'Iphone 11',price:'30000', imageUrl:'2.jpeg',description:'daha iyi telefon', categoryid:"1"},
    {id:"13215", name:'Iphone 14 pro',price:'80000', imageUrl:'3.jpeg',description:'çok daha iyi telefon', categoryid:"1"},
    {id:"13216", name:'laptop',price:'80000', imageUrl:'3.jpeg',description:'çok daha iyi bilgisayar', categoryid:"2"},
    {id:"13217", name:'buzdolabı',price:'80000', imageUrl:'3.jpeg',description:'çok daha iyi', categoryid:"3"}
];

module.exports=class Product {
    constructor(name, price, imageUrl, description, categoryid) {
        this.id = (Math.floor(Math.random()*99999)+1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryid = categoryid;
    }

    saveProduct(){
        products.push(this);
    }

    static getAll() {
        return products;
    }

    static getById(id) {
        return products.find(i => i.id === id);
    }

    static getProductsByCategoryId(categoryid) {
        return products.filter(i=> i.categoryid == categoryid);

    }

    static Update(product) {
        const index = products.findIndex(i=>i.id===product.id);

        products[index].name = product.name;
        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
        products[index].categoryid = product.categoryid;
    }

    static DeleteById(id) {
        const index = products.findIndex(i=> i.id === id);
        products.splice(index,1);
    }
}


