import { readFileSync } from 'fs';

class InputReader {
  /**
   * Parse data
   *
   * @async
   * @function promisedGet
   * @param {string} path - Relative path to file
   * @return {Promise<Array>} The data in array format
   */
  static promisedGet(path) {
    return new Promise((resolve, reject) => {
      const data = readFileSync(path, 'utf8');
      const measures = data.split(/\r?\n/).map(measure => Number(measure));

      resolve(measures);
    });
  }

  /**
   * Parse data
   *
   * @async
   * @function get
   * @param {string} path - Relative path to file
   * @return {Promise<Array>} The data in array format
   */
  static async get(path) {
    try {
      const data = readFileSync(path, 'utf8');
      const measures = data.split(/\r?\n/).filter(entry => /\S/.test(entry)).map(measure => Number(measure));

      return measures;
    } catch (error) {
      return [];
    }
  }
}

export default InputReader;
