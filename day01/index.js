import InputReader from './src/input_reader.js';
import Report from './src/report.js';

const main = async() => {
  try {
    const data = await InputReader.get('./data/input');

    const report = new Report({
      data,
      window: Number(process.argv.slice(2)[0])
    });

    console.log(`There are ${report.increments()} increments and ${report.decrements()} decrements`);
  } catch (error) {
    console.log(error);
  }
};

main();
