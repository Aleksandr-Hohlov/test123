import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)

function decodedData(encoded, translations) {
  return encoded.map((item) => {
    const decodedItem = {};
    const excludeItem = ["groupId", "service", "formatSize", "ca"];

    for (let key in item) {
      if (key.endsWith("Id") && !excludeItem.includes(key)) {
        const idValue = item[key];
        decodedItem[key] = translations[idValue] || idValue;
      } else {
        decodedItem[key] = item[key];
      }
    }
    return decodedItem;
  });
}

const decoded = decodedData(encoded, translations);

console.log(decoded);
