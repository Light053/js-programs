// Функция для генерации случайного числа в заданном диапазоне
function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для записи данных в файл
function fs(product) {
	const fs = require("fs");

	const filename = "wbProducts.txt";
	const content = JSON.stringify(product) + "\n";

	// Открытие файла в режиме добавления
	fs.open(filename, "a", (err, fileDescriptor) => {
		if (err) {
			console.error(err);
		} else {
			// Запись данных в файл
			fs.appendFile(fileDescriptor, content, (err) => {
				if (err) {
					console.error(err);
				} else {
					// Закрытие файла
					fs.close(fileDescriptor, (err) => {
						if (err) {
							console.error(err);
						}
					});
				}
			});
		}
	});
}

// Функция для получения деталей продукта
async function fetchProductDetails(num) {
	const link = `https://card.wb.ru/cards/detail?appType=1&curr=rub&dest=-1257786&regions=80,38,4,64,83,33,68,70,69,30,86,75,40,1,66,110,22,31,48,71,114&spp=0&nm=${num}`;
	const response = await fetch(link);
	if (response.status === 200) {
		try {
			const data = await response.json();
			const product = data.data.products[0];

			const price = product.salePriceU;
			const newPrice = String(price).slice(0, -2) + " рублей";

			// Создание объекта с данными продукта
			const finisProduct = {
				Имя: product.name,
				Цена: newPrice,
				Бренд: product.brand,
				Скидка: product.sale + "%",
				Отзывов: product.feedbacks,
				"Код товара": num,
			};

			// Запись данных в файл
			fs(finisProduct);
			return finisProduct;

		} catch (error) {
			return { Ошибка: "Код " + num + " не рабочий" };
		}

	}
}

// Функция для получения дополнительных продуктов
async function moreProducts(qProducts) {
	try {
		const products = [];

		for (let i = 0; i < qProducts; i++) {
			const randomNum = generateRandomNumber(100000, 999999999);
			const response = await fetchProductDetails(randomNum);

			products.push(response);
		}

		return products;
	} catch (e) {
		console.log(e);
	}
}

// Вызов функции moreProducts для получения 10000 продуктов
moreProducts(100)
	.then(result => console.log(result))
	.catch(e => console.log(e));
