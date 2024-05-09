const getTotalIsles = function (grid) {
  // write your code here
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "L") {
      return;
    }

    grid[i][j] = "V";

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L' && (i === 0 || grid[i - 1][j] !== 'L') && (j === 0 || grid[i][j - 1] !== 'L')) {

        count++;

        dfs(i, j);

      }
    }
  }
  console.log(count);

  return count;
};

module.exports = getTotalIsles;
