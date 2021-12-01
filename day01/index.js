import ReportParser from './src/report_parser.js';

const main = async() => {
  const data = await ReportParser.get('./data/input');

  console.log(data);
};

main();
