const axios = require('axios');
const cheerio = require('cheerio');

// Функция для получения данных с веб-страницы
async function fetchData(url) {
	try {
		// Отправляем GET-запрос с использованием axios
		const response = await axios.get(url);

		// Загружаем полученный HTML-код с помощью cheerio
		const $ = cheerio.load(response.data);

		// Ищем все теги <p> на странице
		const pTags = $('p');

		// Извлекаем текст из каждого тега <p> и сохраняем в массив
		const pText = pTags.map((index, element) => $(element).text()).get();

		// Возвращаем первые 17 элементов массива pText
		return pText.slice(0, 17);
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		throw error;
	}
}

// Функция для получения дополнительных данных из нескольких URL-адресов
async function moreData(arr) {
	try {
		// Отправляем запросы на все URL-адреса параллельно и ожидаем завершения всех запросов
		const results = await Promise.all(arr.map(url => fetchData(url)));

		// Вычисляем количество полученных результатов
		const leng = results.length;

		// Объединяем все результаты в один массив, удаляя последние 4 элемента каждого подмассива
		const quotes = results.flatMap(result => result.slice(0, leng - 4));

		// Заменяем символы переноса строки на фактические переносы строк
		const formattedQuotes = quotes.map(quote => quote.replace(/\\n/g, '\n'));

		// Возвращаем отформатированные цитаты
		return formattedQuotes;
	} catch (e) {
		console.log(e.message);
		throw e;
	}
}

// Вызываем функцию moreData с массивом URL-адресов в качестве аргумента
moreData(['https://citaty.info/anime', 'https://citaty.info/anime?page=1', 'https://citaty.info/anime?page=2'])
	.then(result => console.log(result))
	.catch(e => console.log(e.message));

// источник https://citaty.info/
