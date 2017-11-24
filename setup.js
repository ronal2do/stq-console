/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

const fs = require('fs');
const path = require('path');
const https = require('https');
const fetch = require('node-fetch');
const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities');

let file, text;

//
// Inject "babel-plugin-relay"
// -----------------------------------------------------------------------------
file = path.resolve('./node_modules/babel-preset-react-app/index.js');
text = fs.readFileSync(file, 'utf8');

if (!text.includes('babel-plugin-relay')) {
  if (text.includes('const plugins = [')) {
    text = text.replace(
      'const plugins = [',
      "const plugins = [\n  require.resolve('babel-plugin-relay'),"); // prettier-ignore
    fs.writeFileSync(file, text, 'utf8');
  } else {
    throw new Error(`Failed to inject babel-plugin-relay in ${file}.`);
  }
}

//
// Inject "babel-plugin-styled-components"
// -----------------------------------------------------------------------------
file = path.resolve('./node_modules/babel-preset-react-app/index.js');
text = fs.readFileSync(file, 'utf8');

if (!text.includes('babel-plugin-styled-components')) {
  if (text.includes('const plugins = [')) {
    text = text.replace(
      'const plugins = [',
      "const plugins = [\n  require.resolve('babel-plugin-styled-components'),"); // prettier-ignore
    fs.writeFileSync(file, text, 'utf8');
  } else {
    throw new Error(`Failed to inject babel-plugin-styled-components in ${file}.`); // prettier-ignore
  }
}

//
// Inject "babel-plugin-transform-export-extensions"
// -----------------------------------------------------------------------------
file = path.resolve('./node_modules/babel-preset-react-app/index.js');
text = fs.readFileSync(file, 'utf8');

if (!text.includes('babel-plugin-transform-export-extensions')) {
  if (text.includes('const plugins = [')) {
    text = text.replace(
      'const plugins = [',
      "const plugins = [\n  require.resolve('babel-plugin-transform-export-extensions'),"); // prettier-ignore
    fs.writeFileSync(file, text, 'utf8');
  } else {
    throw new Error(`Failed to inject babel-plugin-transform-export-extensions in ${file}.`); // prettier-ignore
  }
}

//
// Download the GraphQL schema
// -----------------------------------------------------------------------------
if (process.argv.includes('--download-schema')) {
  console.log(introspectionQuery);

  fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: introspectionQuery }),
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      const schemaString = printSchema(buildClientSchema(res.data));
      fs.writeFileSync('./src/schema.graphql', schemaString);
    });
}
