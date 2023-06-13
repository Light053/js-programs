function unicNum(arr) {
	const counts = {}; // Объект для хранения количества вхождений каждого числа

	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		if (counts[num]) {
			counts[num] += 1; // Если число уже встречалось, увеличиваем его счетчик
		}
		else {
			counts[num] = 1; // Если число встречается первый раз, устанавливаем его счетчик в 1
		}
	}

	const num = arr.filter(n => counts[n] === 1); // Фильтрация чисел, у которых счетчик равен 1

	return num;
}

console.log(unicNum([1, 1, 2, 3, 3, 5, 7, 7, 9])); // Вывод результатов в консоль
