class ProductList { 
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.allProductsPrice = 0; // переменная со значением общей стоимости
        this._fetchProduct();
        this.render();
        this.getTotalPrice(); //  метод, определяющий суммарную стоимость всех товаров
    }

    _fetchProduct() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ]
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
        
    }
    /* метод, определяющий суммарную стоимость всех товаров */
    getTotalPrice() {
        this.goods.forEach(productPrice => this.allProductsPrice += productPrice.price);
    }
}

class ProductItem {
    constructor(product, img = "https://placehold.it/200x150") {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img alt="some img" src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

/* класс для корзины товаров  */
class Basket {
    constructor() {}

    /* addToBasket() {метод добавляет выбранный товар в корзину} */

    /* getBasketPrice() {метод считает общую стоимость товаров в корзине} */

    /* deleteBasketProduct() {метод удаляет выбранный товар из корзины} */
}

/* класс для элементов корзины */
class BasketProduct {
    constructor() {}
    
    /* incrementBasketProduct() {метод увеличевает количество выбранного товара на единицу} */

    /* decrementBasketProduct() {метод уменьшает количество выбранного товара на единицу} */
}