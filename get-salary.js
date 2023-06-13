const employees = [
	{ name: 'John', position: 'Developer', salary: 5000 },
	{ name: 'Jane', position: 'Manager', salary: 7000 },
	{ name: 'Bob', position: 'Developer', salary: 5500 },
	{ name: 'Alice', position: 'Manager', salary: 9000 },
	{ name: 'Eve', position: 'Developer', salary: 6000 }
];

// Функция для расчета средней зарплаты
function averageSalaries(employees) {
	if (employees.length === 0) {
		console.log("Работников нет!");
		return;
	}

	// Фильтрация работников по должности "Manager"
	const managerLength = employees.filter(worker => worker.position === "Manager");
	const totalSalary = managerLength.reduce((sum, worker) => sum += worker.salary, 0);
	const managerAverageSalary = totalSalary / managerLength.length;

	// Фильтрация работников по должности "Developer"
	const developerLength = employees.filter(worker => worker.position === "Developer");
	const totalSalaryD = developerLength.reduce((sum, worker) => sum += worker.salary, 0);
	const developerAverageSalary = totalSalaryD / developerLength.length;

	return {
		Developer: developerAverageSalary,
		Manager: managerAverageSalary,
	};
}

const averageS = averageSalaries(employees);
console.log(averageS);
