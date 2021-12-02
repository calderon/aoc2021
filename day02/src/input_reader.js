import { readFileSync } from 'fs';

class InputReader {
  /**
   * Parse data
   *
   * @async
   * @function get
   * @param {string} path - Relative path to file
   * @return {Promise<String>} The data in array format
   */
  static async get(path) {
    try {
      const data = readFileSync(path, 'utf8');

      return data;
    } catch (error) {
      return [];
    }
  }
}

export default InputReader;
