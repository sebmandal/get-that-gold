function main() {
	// initializing the grid
	grid = initGrid();

	writeTilesToDOM(grid);

	// adding one red square (this will be the player)
	grid = placeSquare("red", grid);
	writeTilesToDOM(grid);

	// adding one gold square
	grid = placeSquare("gold", grid);
	writeTilesToDOM(grid);

	// adding ten gray squares
	for (var i = 0; i < 10; i++) {
		grid = placeSquare("gray", grid);
		writeTilesToDOM(grid);
	}

	// every second, add a new gray block
	setInterval(function () {
		grid = placeSquare("gray", grid);

		writeTilesToDOM(grid);
	}, 1000);

	// adding the event listeners
	document.addEventListener("keydown", function (event) {
		var key = event.keyCode;
		if (key === 87 || key === 38) {
			// 87 = w
			// 38 = up arrow
			grid = moveUp(grid);
			writeTilesToDOM(grid);
		} else if (key === 65 || key === 37) {
			// 65 = a
			// 37 = left arrow
			grid = moveLeft(grid);
			writeTilesToDOM(grid);
		} else if (key === 83 || key === 40) {
			// 83 = s
			// 40 = down arrow
			grid = moveDown(grid);
			writeTilesToDOM(grid);
		} else if (key === 68 || key === 39) {
			// 68 = d
			// 39 = right arrow
			grid = moveRight(grid);
			writeTilesToDOM(grid);
		}
	});
}
