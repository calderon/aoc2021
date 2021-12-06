import InputReader from "./src/input_reader.js";
import InputParser from "./src/input_parser.js";
import Vent from "./src/vent.js";

const inputExamplePath = './data/input_example';
const inputPath = './data/input';

const path = inputPath;

const main = async() => {
  try {
    const input = await InputReader.get(inputPath);
    const data = new InputParser(input);

    const vent = new Vent(data.toArray());

    vent.lines.forEach(line => {
      if (line.horizontal() || line.vertical()) {
        line.path.forEach(coordinate => {
          vent.diagram.increase(coordinate);
        });
      }
    });

    // I don't recommend use this with inputPath
    // vent.diagram.print();

    console.log(`\nThere are ${vent.diagram.overlappings()} points where at least two lines overlap\n`);
  } catch (err) {
    throw new Error(err);
  }
};

main();
