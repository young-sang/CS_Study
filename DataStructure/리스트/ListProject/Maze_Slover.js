class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.next = null;
    }
}

class MazeSolver {
    constructor(maze) {
        this.maze = maze;
        this.visited = new Set();
        this.path = null;
    }

    solve(start, end) {
        this._findPath(start[0], start[1], end[0], end[1]);
    }

    _findPath(x, y, endX, endY) {
        if (x === endX && y === endY) {
            this._addToPath(x, y);
            return true;
        }
        if (this.visited.has(`${x},${y}`) || !this._isValid(x, y)) {
            return false;
        }

        this.visited.add(`${x},${y}`);

        if (this._findPath(x + 1, y, endX, endY) ||
            this._findPath(x - 1, y, endX, endY) ||
            this._findPath(x, y + 1, endX, endY) ||
            this._findPath(x, y - 1, endX, endY)) {
            this._addToPath(x, y);
            return true;
        }
        return false;
    }

    _isValid(x, y) {
        return x >= 0 && y >= 0 && x < this.maze.length && y < this.maze[0].length && this.maze[x][y] === 0;
    }

    _addToPath(x, y) {
        const newNode = new Node(x, y);
        newNode.next = this.path;
        this.path = newNode;
    }

    printPath() {
        let current = this.path;
        while (current) {
            console.log(`(${current.x}, ${current.y}) -> `);
            current = current.next;
        }
        console.log("End");
    }
}
