const fs = require("fs");
const srt2vtt = require("srt-to-vtt");
// Configuration
let descript = false;
let urls = [];
let data = "";

// Uncomment this to run descript ↓
// descript = true;

// Read file name in a folder and make an array
fs.readdirSync("./public/asset/sub/").forEach(file => {
  if (file.substr(-3) === "srt") {
    descript = true;
  }
  let newFile = file.substr(0, file.length - 4);
  urls.push(newFile);
  urls.sort((a, b) => parseInt(a) - parseInt(b));
});

console.log(urls);

if (descript) {
  console.log("descript");
  urls.forEach(url => {
    fs.createReadStream(`./public/asset/sub/${url}.srt`)
      .pipe(srt2vtt())
      .pipe(fs.createWriteStream(`./public/asset/sub/${url}.vtt`));
  });
}

data = `export const urls = [
    ${urls.map(url => `\"${url}\"`)}
];`;

if (urls.length === 0) {
  console.log("Tập tin trống - Vui lòng đặt đúng vị trí file");
} else {
  fs.writeFileSync("./src/urls/Urls.js", data);
}

// If subscript file setting is srt <= generate a descript to vtt
