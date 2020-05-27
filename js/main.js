const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList { 
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }

    _getProducts() {
        return fetch (`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

class ProductItem {
    constructor(product, img = "https://placehold.it/200x150") {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
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

/* класс Корзины */
class Basket {
    constructor(container = '.modal') {
        this.container = container;
        this.goodsBasket = {};
        this.allProductsBasket = [];
        this._getBasketProduct()
            .then(data => {
                this.goodsBasket = {...data};
                console.log(this.goodsBasket);
                this.render()
        });
    }

    _getBasketProduct() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
        })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goodsBasket.contents) {
            const productObj = new BasketItem(product);
            this.allProductsBasket.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

/* класс Элемента Корзины */
class BasketItem {
    constructor(product) {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.quantity = product.quantity;
    }

    render() {
        return `<div class="basket-item">
                    <h3>${this.title}</h3>
                    <p>Цена товара: ${this.price}</p>
                    <p>Количество: ${this.quantity}</p>
                </div>`
        }
}

let list = new ProductList();
let basketList = new Basket();

/* функция обработчик события для появления и скрытия модального окна с содержанием корзины */
const basketBtnClickHandler = () => {
    const modal = document.querySelector('.modal');
    if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    }
    else {
        modal.classList.add('hidden');
    }
}

/* вешаем обработчик события на кнопку корзины */
const basket = document.querySelector('.btn-cart');
basket.addEventListener('click', basketBtnClickHandler);

