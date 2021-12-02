import ReportParser from './src/report_parser.js';
import Report from './src/report.js';

const main = async() => {
  const data = await ReportParser.get('./data/input');
  const report = new Report(data);

  console.log(`There are ${report.increments()} increments and ${report.decrements()}`);
};

main();
