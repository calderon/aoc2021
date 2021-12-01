import { readFileSync } from 'fs';

class ReportParser {
  static get(path) {
    return new Promise((resolve, reject) => {
      const data = readFileSync(path, 'utf8');

      const measures = data.split(/\r?\n/).map(measure => Number(measure));

      resolve(measures);
    });
  }
}

export default ReportParser;
