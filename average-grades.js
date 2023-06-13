// Определение массива студентов
let students = [
	{
		name: "Alice",
		age: 20,
		grades: [85, 90, 92],
	},
	{
		name: "Bob",
		age: 19,
		grades: [90, 95, 87],
	},
	{
		name: "Charlie",
		age: 21,
		grades: [82, 88, 95],
	},
];

// Функция для получения среднего балла студентов
const getAverageGrades = (students, n) => {
	// Проверка, является ли массив студентов пустым
	if (students.length === 0) {
		console.log("Массив студентов пуст!");
		return;
	}

	// Используя метод map, создаем новый массив объектов,
	// содержащих имя студента и его средний балл
	const studentsWithAverage = students.map(student => ({
		name: student.name,
		average: student.grades.reduce((acc, value) => acc += value) / student.grades.length,
	}));

	// Сортируем студентов по убыванию среднего балла
	const sortedStudents = studentsWithAverage.sort((a, b) => b.average - a.average);

	// Возвращаем первые n студентов с наибольшим средним баллом
	return sortedStudents.slice(0, n);
};

console.log(getAverageGrades(students, 2));
