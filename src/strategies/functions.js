const colorFunctions = /((rgb|hsl)a?\([\d]{1,3}%?\s*,\s*[\d]{1,3}%?\s*,\s*[\d]{1,3}%?(\s*,\s*\d?\.?\d+)?\))/gi;

/**
 * @export
 * @param {string} text
 * @returns {{
 *  start: number,
 *  end: number,
 *  color: string
 * }}
 */
export async function findFn(text) {
  let match = colorFunctions.exec(text);
  let result = [];

  while (match !== null) {
    const start = match.index;
    const end = colorFunctions.lastIndex;
    const color = match[0];

    result.push({
      start,
      end,
      color
    });

    match = colorFunctions.exec(text);
  }

  return result;
}

export function sortStringsDesc(arr) {
  return arr.sort((a, b) => {
    if (b < a) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  });
}
