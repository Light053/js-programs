function checkLogs(events) {
	let minDays = 1;

	for (let i = 1; i < events.length; i++) {
		const prevEvent = new Date(`2000-01-01T${events[i - 1]}`);
		const currentEvent = new Date(`2000-01-01T${events[i]}`);

		if (currentEvent < prevEvent) {
			minDays++;
		} else if (currentEvent.getTime() === prevEvent.getTime()) {
			minDays++;
		}
	}

	return minDays
}
log = ["12:00:00", "12:00:00", "00:00:00"];

console.log(checkLogs(log))
