const Shop = {
	products: [
		{ id: 1, name: 'Телефон', price: 100 },
		{ id: 2, name: 'Ноутбук', price: 500 },
		{ id: 3, name: 'Планшет', price: 200 },
	],
	cart: [],
};

// Функция для получения продукта по его id и заданному количеству
async function getProductById(id, quantity) {
	try {
		// Имитация асинхронного запроса с помощью Promise и setTimeout
		const products = await new Promise(resolve => setTimeout(() => resolve(Shop.products.filter(product => product.id === id)), 2000));

		// Добавление продуктов в корзину указанное количество раз
		for (var i = 0; i < quantity; i++) {
			Shop.cart.push(...products);
		}

		const cart = Shop.cart;
		return cart;
	}
	catch (error) {
		console.log(error.message);
	}
}

// Функция main для вызова getProductById и вывода корзины
async function main() {
	try {
		const cart = await getProductById(3, 10); // Получаем 10 планшетов
		console.log(cart); // Выводим корзину
	}
	catch (error) {
		console.log(error);
	}
}

main();
