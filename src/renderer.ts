/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import { readFile } from 'original-fs';
import './index.css';
import fs from "node:fs";

document.getElementById("submitbutton").addEventListener('click',async()=>{

//    let fI:HTMLInputElement = document.getElementById("firstinput") as HTMLInputElement;
//    let sI:HTMLInputElement = document.getElementById("secondinput") as HTMLInputElement;
//    const firstinput:number= parseInt(fI.value);
//    const secondinput:number = parseInt(sI.value);
//    console.log(firstinput, secondinput);
//    const result = document.getElementById('result');
//    result.innerText = resultFromMain+" the result is "+(firstinput+secondinput);
    let fileInput:HTMLInputElement = document.getElementById("fileinput") as HTMLInputElement;
    const resultFromMain = await window.electronAPI.submitButton(fileInput.files[0].path);
//    const resultFromMain = await window.electronAPI.submitButton();

    document.getElementById('outputforfile').innerText = resultFromMain;
 //   var textfile = fs.readFile(fileInput.value,"utf8",(err,data)=>{
 //       if (err) throw err;

 //       console.log(data);
 //   });
 //   console.log("The value of text file is ",textfile);


})
