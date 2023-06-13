// Определение игровой доски
const board = {
	cell1: "X", cell2: "e", cell3: "O",
	cell4: "e", cell5: "X", cell6: "O",
	cell7: "e", cell8: "e", cell9: "X"
};

// Функция для проверки победителя
const checkWinner = (board) => {
	// Возможные выигрышные комбинации
	const winningCombinations = [
		["cell1", "cell2", "cell3"],
		["cell4", "cell5", "cell6"],
		["cell7", "cell8", "cell9"],
		["cell1", "cell4", "cell7"],
		["cell2", "cell5", "cell8"],
		["cell3", "cell6", "cell9"],
		["cell1", "cell5", "cell9"],
		["cell3", "cell5", "cell7"]
	];

	// Массивы для хранения комбинаций крестиков и ноликов
	const oCombination = [];
	const xCombination = [];

	// Проверка каждой ячейки на доске
	for (const key in board) {
		if (board[key] === 'X') {
			xCombination.push(key); // Добавляем ячейку в комбинацию крестиков
		} else if (board[key] === 'O') {
			oCombination.push(key); // Добавляем ячейку в комбинацию ноликов
		}
	}

	// Проверка, содержит ли комбинация крестиков одну из выигрышных комбинаций
	const xWinner = winningCombinations.some(combination => {
		return combination.every(cell => xCombination.includes(cell));
	});

	// Проверка, содержит ли комбинация ноликов одну из выигрышных комбинаций
	const oWinner = winningCombinations.some(combination => {
		return combination.every(cell => oCombination.includes(cell));
	});

	// Возвращаем результат
	if (xWinner) {
		return "Победитель: X. Комбинация: " + xCombination.join(", ");
	} else if (oWinner) {
		return "Победитель: O. Комбинация: " + oCombination.join(", ");
	} else {
		return "Нет победителей!";
	}
}

// Проверяем победителя и выводим результат в консоль
const winner = checkWinner(board);
console.log(winner);
