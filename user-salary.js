const users = [
	{ id: 1, name: 'Alice', age: 25 },
	{ id: 2, name: 'Bob', age: 30 },
	{ id: 3, name: 'Charlie', age: 35 },
];

const salaries = [
	{ userId: 1, amount: 5000 },
	{ userId: 2, amount: 7000 },
	{ userId: 3, amount: 3000 },
];

// Функция для получения зарплаты по userId
const getSalary = async (salaries, id) => {
	await new Promise(resolve => setTimeout(resolve, 1000));

	const successFind = salaries.find(user => user.userId === id);
	if (successFind) {
		return successFind.amount;
	}
	return null;
};

// Функция для объединения пользователей и их зарплат
const getUsersWithSalaries = async (salaries, users) => {
	try {
		const usersWithSalaries = await Promise.all(users.map(async user => {
			const salary = await getSalary(salaries, user.id);
			return { ...user, salary };
		}));

		return usersWithSalaries;
	}
	catch (error) {
		console.log(error.message);
	}
};

// Асинхронная функция для получения данных
async function getData() {
	try {
		const result = await getUsersWithSalaries(salaries, users);
		console.log(result);
	}
	catch (error) {
		console.log(error.message);
	}
}

getData();
