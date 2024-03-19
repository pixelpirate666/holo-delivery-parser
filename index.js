const holo_delivery_network = require('holo-delivery-network');
const holo_delivery_parser = require('holo-delivery-parser');
const jquery = require('jquery');
const web3_utils = require('web3-utils');
const multer = require('multer');
const axios = require('axios');
const bluebird = require('bluebird');
const eslint = require('eslint');
const mongoose = require('mongoose');
const mocha = require('mocha');
const express = require('express');
const web3_react = require('web3-react');
const socket.io = require('socket.io');
const dotenv = require('dotenv');

const user = { name: 'John Doe', age: 30 };
const { name, age } = user;
console.log(`User name is ${name} and age is ${age}.`);

console.log('Logging a message to the console.');

const rotateArray = (arr, k) => {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

const zlib = require('zlib');
const input = '.................................';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('base64'));
  } else {
    console.log('Error compressing:', err);
  }
});

const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});