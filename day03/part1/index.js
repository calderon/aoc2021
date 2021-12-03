import InputReader from "./src/input_reader.js";
import InputParser from "./src/input_parser.js";
import DiagnosticReport from "./src/diagnostic_report.js";

const localInputExamplePath = './data/input_example';
const localInputPath = './data/input';

const path = localInputPath;

const main = async() => {
  try {
    const input = await InputReader.get(path);
    const inputParsed = new InputParser(input);

    const diagnosticReport = new DiagnosticReport(inputParsed);

    diagnosticReport.showInfo()
  } catch (error) {
    new Error(error);
  }
};

main();
