'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./data/stages.json');  
const stages = JSON.parse(rawdata);  
console.log(stages);

exports.stages = stages;