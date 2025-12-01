/*
 * Importing node APIs breaks the SDK in the browser.
 * The ideal scenario is that we do not use nodejs exclusive APIs in this codebase
 *
 * In the interim, this file provides a way to import the APIs in a way that will not break the SDK in the browser.
 */

import { type stat, type readFile } from 'fs/promises';
import { type createReadStream } from 'fs';
import { type extname, type resolve } from 'path';
import type readline from 'readline';
import { type isUtf8 } from 'buffer';

let statMethod: typeof stat;
let resolveMethod: typeof resolve;
let createReadStreamMethod: typeof createReadStream;
let extnameMethod: typeof extname;
let readlineMethod: typeof readline;
let isUtf8Method: typeof isUtf8;
let readFileMethod: typeof readFile;
try {
  statMethod = require('fs/promises').stat;
  createReadStreamMethod = require('fs').createReadStream;
  extnameMethod = require('path').extname;
  readlineMethod = require('readline');
  isUtf8Method = require('buffer').isUtf8;
  resolveMethod = require('path').resolve;
  readFileMethod = require('fs/promises').readFile;
} catch {}

export {
  statMethod as stat,
  createReadStreamMethod as createReadStream,
  extnameMethod as extname,
  readlineMethod as readline,
  isUtf8Method as isUtf8,
  resolveMethod as resolve,
  readFileMethod as readFile,
};
