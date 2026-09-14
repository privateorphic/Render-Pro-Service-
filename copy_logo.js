const fs = require('fs');
const path = require('path');

const srcImage = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\f37ae158-abc1-4f97-ae55-97e02f27002d\\media__1789391877263.jpg';

const targets = [
  'e:\\rendered-perfect-main\\rendered-perfect-main\\public\\render-pro-logo.jpg',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\public\\render-pro-logo.png',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\public\\everest-logo.png',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\public\\logo.png',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\public\\favicon.png',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\src\\assets\\render-pro-logo.jpg',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\src\\assets\\render-pro-logo.png',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\src\\assets\\everest-logo.png',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\src\\assets\\logo.png'
];

targets.forEach(target => {
  fs.copyFileSync(srcImage, target);
  console.log('Successfully copied to:', target);
});
