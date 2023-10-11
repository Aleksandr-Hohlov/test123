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

function getUniqueId(encoded, translations) {
  const id = new Set();
  for (let item of encoded) {
    for (let key in item) {
      if (key.endsWith("Id")) {
        id.add(item[key]);
      }
    }
  }
  return Array.from(id).filter((id) => id in translations);
}

const decoded = decodedData(encoded, translations);
const uniqueId = getUniqueId(encoded, translations);

console.log(decoded);
console.log(uniqueId);
