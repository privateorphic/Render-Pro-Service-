const fs = require('fs');

const srcImage = 'e:\\rendered-perfect-main\\rendered-perfect-main\\src\\assets\\render-pro-logo.png';

const targets = [
  'e:\\rendered-perfect-main\\rendered-perfect-main\\public\\render-pro-logo.png',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\public\\everest-logo.png',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\public\\logo.png',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\public\\favicon.png',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\src\\assets\\everest-logo.png',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\src\\assets\\logo.png'
];

targets.forEach(target => {
  fs.copyFileSync(srcImage, target);
  console.log('Successfully copied image to:', target);
});

const svgSrc = 'e:\\rendered-perfect-main\\rendered-perfect-main\\src\\assets\\everest-logo.svg';
const svgTargets = [
  'e:\\rendered-perfect-main\\rendered-perfect-main\\public\\everest-logo.svg',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\public\\render-pro-logo.svg',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\src\\assets\\everest-logo-navy.svg',
  'e:\\rendered-perfect-main\\rendered-perfect-main\\src\\assets\\everest-logo-stacked.svg'
];

svgTargets.forEach(target => {
  fs.copyFileSync(svgSrc, target);
  console.log('Successfully copied SVG to:', target);
});
