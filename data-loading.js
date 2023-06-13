// Задача: Создать функцию для загрузки данных с сервера и их обработки

// Функция для задержки выполнения
async function delay() {
	return new Promise(resolve => setTimeout(resolve, 1000));
}

// Функция для загрузки данных с сервера
async function fetchData(url) {
	await delay(); // Задержка выполнения на 1 секунду (для имитации загрузки данных)
	const response = await fetch(url); // Отправка запроса на указанный URL
	const data = await response.json(); // Преобразование полученных данных в формат JSON
	return data; // Возвращение полученных данных
}

// Функция для обработки данных
async function processData() {
	try {
		await delay(); // Задержка выполнения на 1 секунду
		const data = await fetchData('https://example.api.com/data'); // Загрузка данных с сервера по указанному URL

		// Модификация данных
		const modifiedData = data.map(item => {
			return {
				id: item.id,
				name: item.name.toUpperCase(),
				age: new Date().getFullYear() - new Date(item.birthdate).getFullYear()
			};
		});

		// Фильтрация данных
		const filteredData = modifiedData.filter(item => item.age >= 18);

		console.log(filteredData); // Вывод отфильтрованных данных в консоль
	} catch (error) {
		console.error('Ошибка:', error); // В случае ошибки выводим сообщение об ошибке в консоль
	}
}

processData(); // Вызов функции для обработки данных
