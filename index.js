/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import qr from "qr-image";
import fs from "fs";
import inquirer from 'inquirer';
inquirer
  .prompt([
    {
      type:'input',
      name:'URL',
      message:'Enter the URL',
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
      const url = answers.URL;
      let qr_image = qr.image(url,{type:'png'});
      qr_image.pipe(fs.createWriteStream('image.png'));
      fs.writeFile("message.txt",url,(err) => {
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });