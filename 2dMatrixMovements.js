// movement functions
function moveUp(grid) {
	var playerX = getPlayerX(grid);
	var playerY = getPlayerY(grid);

	// first we check if the square above the player is a black square, if so we move the player up
	// if the square above the player is a gold square, we add 1 to the player's score and generate a new gold
	if (playerX > 0) {
		if (grid[playerX - 1][playerY] === "black") {
			grid[playerX][playerY] = "black";
			grid[playerX - 1][playerY] = "red";
		} else if (grid[playerX - 1][playerY] === "gold") {
			grid[playerX][playerY] = "black";
			grid[playerX - 1][playerY] = "red";
			setGold(getGold() + 1);

			grid = placeSquare("gold", grid);
			writeTilesToDOM(grid);
		}
	}
	return grid;
}

function moveDown(grid) {
	var playerX = getPlayerX(grid);
	var playerY = getPlayerY(grid);

	// first we check if the square below the player is a black square, if so we move the player down
	// if the square below the player is a gold square, we add 1 to the player's score and generate a new gold
	if (playerX < 9) {
		if (grid[playerX + 1][playerY] === "black") {
			grid[playerX][playerY] = "black";
			grid[playerX + 1][playerY] = "red";
		} else if (grid[playerX + 1][playerY] === "gold") {
			grid[playerX][playerY] = "black";
			grid[playerX + 1][playerY] = "red";
			setGold(getGold() + 1);

			grid = placeSquare("gold", grid);
			writeTilesToDOM(grid);
		}
	}
	return grid;
}

function moveLeft(grid) {
	var playerX = getPlayerX(grid);
	var playerY = getPlayerY(grid);

	// first we check if the square to the left of the player is a black square, if so we move the player left
	// if the square to the left of the player is a gold square, we add 1 to the player's score and generate a new gold
	if (playerY > 0) {
		if (grid[playerX][playerY - 1] === "black") {
			grid[playerX][playerY] = "black";
			grid[playerX][playerY - 1] = "red";
		} else if (grid[playerX][playerY - 1] === "gold") {
			grid[playerX][playerY] = "black";
			grid[playerX][playerY - 1] = "red";
			setGold(getGold() + 1);

			grid = placeSquare("gold", grid);
			writeTilesToDOM(grid);
		}
	}
	return grid;
}

function moveRight(grid) {
	var playerX = getPlayerX(grid);
	var playerY = getPlayerY(grid);

	// first we check if the square to the right of the player is a black square, if so we move the player right
	// if the square to the right of the player is a gold square, we add 1 to the player's score and generate a new gold
	if (playerY < 9) {
		if (grid[playerX][playerY + 1] === "black") {
			grid[playerX][playerY] = "black";
			grid[playerX][playerY + 1] = "red";
		} else if (grid[playerX][playerY + 1] === "gold") {
			grid[playerX][playerY] = "black";
			grid[playerX][playerY + 1] = "red";
			setGold(getGold() + 1);

			grid = placeSquare("gold", grid);
			writeTilesToDOM(grid);
		}
	}
	return grid;
}
