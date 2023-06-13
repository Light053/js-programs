// Функция для загрузки одного изображения
const uploadImage = async (image) => {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Имитация задержки в 2 секунды

	return `Изображение ${image} успешно загружено!`;
};

// Функция для загрузки нескольких изображений
const uploadImages = async (arr) => {
	console.log("Начало загрузки изображений...");
	const results = [];
	try {
		for (const image of arr) {
			const result = await uploadImage(image);
			results.push(result);
		}
	} catch (error) {
		console.log(error.message);
	}

	return results;
};

// Асинхронная функция main для выполнения основной логики
async function main() {
	try {
		let arr = ['example1.jpg', 'example2.jpg', 'example3.jpg', 'example4.jpg'];
		const result = await uploadImages(arr);
		console.log(result); // Вывод результатов загрузки изображений
		console.log("Фотографии успешно загружены.");
	} catch (error) {
		console.error(error.message);
	}
}

main(); // Вызов функции main для выполнения программы
