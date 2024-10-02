#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');


const templateDir = path.join(__dirname, 'template');

async function init() {


  const destDir = path.join(process.cwd());
  console.log(`Creating project at: ${destDir}`);

  try {
    await fs.copy(templateDir, destDir);
    console.log('Backend folder structure created successfully!');
  } catch (err) {
    console.error('Error creating the project:', err);
  }
}

init();