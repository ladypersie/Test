const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.join(__dirname, '..', 'homework1.html'), 'utf-8');
const js = fs.readFileSync(path.join(__dirname, '..', 'homework1.js'), 'utf-8');

const dom = new JSDOM(html, { runScripts: 'outside-only' });
const { window } = dom;

// Execute the homework script in the DOM context
window.eval(js);

// Fill in the input values
window.document.getElementById('input1').value = '1';
window.document.getElementById('input2').value = '2';
window.document.getElementById('input3').value = '3';

// Trigger the click handler
window.document.getElementById('clickme2').click();

const result = window.document.getElementById('resultArea').textContent;
assert.strictEqual(result, '6');
console.log('Test passed!');
