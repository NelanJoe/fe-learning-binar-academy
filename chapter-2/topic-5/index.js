import chalk from "chalk";
import os from "os";
import fs from "fs";
import { calculateTriangleArea, calculateTriangleAround } from "./module/calculateTriangleArea.js";

console.log(chalk.blue("Hello, World"));
console.log(chalk.green("I'M Groot"));
console.log(chalk.white("I'M White!"));
console.log(chalk.green("Hai hai"));

// Checking free memory with module build in os
const freeMemory = os.freemem() % 1024;
const freeMemoryKB = Math.floor(os.freemem() / 1024);
const freeMemoryMB = Math.floor(freeMemoryKB / 1024);
const freeMemoryGB = Math.floor(freeMemoryMB / 1024);

console.log("Free Memory:", freeMemory);
console.log("Free Memory (KB):", freeMemoryKB, "KB");
console.log("Free Memory (MB):", freeMemoryMB, "MB");
console.log("Free Memory (GB):", freeMemoryGB, "GB");

const fsReadFile = fs.readFileSync("./files/example.txt");

console.log(fsReadFile.toLocaleString());

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleAround(10));
