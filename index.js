

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
      const url = answers.URL;
      let qr_image = qr.image(url,{type:'png'});
      qr_image.pipe(fs.createWriteStream('image.png'));
      fs.writeFile("message.txt",url,(err) => {
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
      console.log("Something else went Wrong");
    }
  });
