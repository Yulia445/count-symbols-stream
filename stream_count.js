import { createReadStream } from "node:fs";


const symbolsCounter = {}

const stream = createReadStream(`cat.txt`)
stream.on('data', (chunk) => {
    const str = chunk.toString();
    
    for (let i = 0; i < str.length; i++) {
    if (symbolsCounter[str[i]]) {
        symbolsCounter[str[i]]++;
    } else {
        symbolsCounter[str[i]] = 1;
    }

}
console.table(symbolsCounter);
});
