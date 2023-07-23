const addZero = (i) => (i < 10 ? "0" : "") + i;

const dateFormat = (timestamp) => {
	const date = new Date(timestamp);
	return (
		date.getFullYear() +
		"-" +
		addZero(date.getMonth() + 1) +
		"-" +
		addZero(date.getDate()) +
		" " +
		addZero(date.getHours()) +
		":" +
		addZero(date.getMinutes()) +
		":" +
		addZero(date.getSeconds())
	);
};

module.exports = dateFormat;
