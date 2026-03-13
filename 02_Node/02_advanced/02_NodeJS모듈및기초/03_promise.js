//const fs = require('fs').promises;
const { readFile } = require('fs');
const fs = require('fs/promises');

// fs.readdir('./')
// .then((files) => {
//     console.log(files)
// })
// .catch((err) => {
//     console.log(err);
// })

async function readDir() {
  try {
    const files = await fs.readdir('./');
    console.log(files);
  } catch (err) {
    console.error(err);
  }
}

readDir();
