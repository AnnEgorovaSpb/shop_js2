const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

/* для сокращения, передаем объект в качестве параметра;
также в функции renderProduct можно обойтись без оператора return и фигурных скобок */
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn">купить</button>
            </div>`
};

/* метод map создает новый массив с результатами функции renderProduct, т.е. html-разметкой для
каждого .product-item (элементы массива разделяются запятыми). Эти запятые остаются при записи
конечного массива в узел .products (с помощью метода innerHTML). Используем метод join('') 
с пустой строкой в качестве разделителя, чтобы избавиться от запятых */
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);