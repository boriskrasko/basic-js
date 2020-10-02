const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let arr = [];
	if (Array.isArray(members)) {
		for (let i = 0; i < members.length; i++) {
			if (typeof members[i] === 'string') {
				let j = 0;
				while (members[i][j] == ' ') {
					j++;
				}
				arr.push(members[i][j].toUpperCase());
			}
		}
		arr = arr.sort().join(``);
	}
	return arr;
};