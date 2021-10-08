// get the player coordinate X
function getPlayerY(grid) {
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			if (grid[i][j] === "red") {
				return j;
			}
		}
	}
}

// get the player coordinate Y
function getPlayerX(grid) {
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			if (grid[i][j] === "red") {
				return i;
			}
		}
	}
}
