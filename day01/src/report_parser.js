import { readFileSync } from 'fs';

class ReportParser {
  static promisedGet(path) {
    return new Promise((resolve, reject) => {
      const data = readFileSync(path, 'utf8');
      const measures = data.split(/\r?\n/).map(measure => Number(measure));

      resolve(measures);
    });
  }

  static async get(path) {
    try {
      const data = readFileSync(path, 'utf8');
      const measures = data.split(/\r?\n/).map(measure => Number(measure));
      
      return measures;
    } catch (error) {
      return [];
    }
  }
}

export default ReportParser;
