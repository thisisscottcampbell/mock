const tournamentWinner = (competitions, results) => {
	const freq = {};
	const champ = { team: null, points: null };

	competitions.forEach((match, i) => {
		const away = match[0];
		const home = match[1];
		const winner = results[i] === 0 ? home : away;

		freq[winner] ? (freq[winner] += 3) : (freq[winner] = 3);

		if (!champ.team) {
			champ.team = winner;
			champ.points = 3;
		}

		if (freq[winner] > champ.points) {
			champ.team = winner;
			champ.points = freq[winner];
		}
	});

	//COMMENT OUT 12 - 20
	// for (const team in freq) {
	// 	const points = freq[team];
	// 	if (points > champ.points) {
	// 		champ.team = team;
	// 		champ.points = points;
	// 	}
	// }
	return champ.team;
};
