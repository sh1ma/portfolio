import yaml from "js-yaml";
import process from "node:process";
import fs from "node:fs";

const yamlFile = fs.readFileSync(process.argv[2]);
const tweets = yaml.load(yamlFile, { json: true });
const converted = JSON.stringify(tweets);

console.log(converted);
