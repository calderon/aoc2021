import InputParser from "./src/input_parser.js";
import InputReader from "./src/input_reader.js";
import Bingo from "./src/bingo.js";

const inputExamplePath = './data/input_example';
const inputPath = './data/input';

const main = async() => {
  const input = await InputReader.get(inputPath);
  const data = new InputParser(input);

  const bingo = new Bingo({
    boardsData: data.boardsData,
    boardSize: 5
  });

  let lastIndexDrawNumberIndex = null;

  for (let index = 0; index < data.drawNumbers.length; index++) {
    const number = data.drawNumbers[index];

    bingo.callNumber(number);
    lastIndexDrawNumberIndex = index;

    if (bingo.firstAwardedBoard) {
      break;
    }
  }

  if (bingo.firstAwardedBoard) {
    console.log(`Board ${bingo.firstAwardedBoard.index} has won with ${bingo.firstAwardedBoard.score} points`)
  } else {
    console.log(`There is no awarded board`);
  }

  console.log(`+ from ${lastIndexDrawNumberIndex + 1}`);

  for (let index = lastIndexDrawNumberIndex + 1; index < data.drawNumbers.length; index++) {
    console.log(data.drawNumbers[index])
    bingo.callNumber(data.drawNumbers[index]);

    console.log("ALL AWARDED " + bingo.allBoardsAwarded());

    if (bingo.allBoardsAwarded()) {
      break;
    }
  }

  console.log(`Board last to win with ${bingo.lastAwardedBoard().score - Number.parseInt(bingo.lastCalledNumber)} points`)
};

main();
