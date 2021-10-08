// using a BFS algorithm, I'll search for paths from the red block to the gold block
// if there are no valid paths, the game is over
function bfs(grid, playerPosX, playerPosY) {
	// looking for "gold"
	var queue = [];
	var path = [];

	// pushing the root node to the queue, which will be our starting block
	queue.push([playerPosX, playerPosY]);

	// iterating until the queue is empty
	while (queue.length > 0) {
		let currentNodeX = queue[0][0];
		let currentNodeY = queue[0][1];

		path.push([currentNodeX, currentNodeY]);

		if (grid[currentNodeX][currentNodeY] === "gold") {
			// if the current node is gold, return this path, as it's correct
			console.log("found the node!");
			console.log(currentNodeX, currentNodeY);
			return path;
		}

		// if the node to the right, left, below, or up exist, add them to the queue in said order
		if (
			grid[currentNodeX + 1] &&
			grid[currentNodeX + 1][currentNodeY] !== "gray"
		) {
			queue.push([currentNodeX + 1, currentNodeY]);
		}

		if (
			grid[currentNodeX - 1] &&
			grid[currentNodeX - 1][currentNodeY] !== "gray"
		) {
			queue.push([currentNodeX - 1, currentNodeY]);
		}

		if (
			grid[currentNodeX][currentNodeY + 1] &&
			grid[currentNodeX][currentNodeY + 1] !== "gray"
		) {
			queue.push([currentNodeX, currentNodeY + 1]);
		}

		if (
			grid[currentNodeX][currentNodeY - 1] &&
			grid[currentNodeX][currentNodeY - 1] !== "gray"
		) {
			queue.push([currentNodeX, currentNodeY - 1]);
		}

		// removing the current node from the queue
		queue.shift();
	}
}
