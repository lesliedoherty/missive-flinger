const fs = require('fs').promises
const path = require('path')
const axios = require('axios')

// Selects a random item from the given array
function chooseRandomArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Returns an array of quote filenames, without the path
async function listQuoteFiles() {
  const quotesDir = resolvePath('quotes')
  return fs.readdir(quotesDir)
}

// Removes trailing and leading spaces and newlines from the given string
function normalizeQuoteString(binary) {
  return binary.toString().trim(" ").trim("\n")
}

// Reads the contents of the specified quote file
async function readQuoteFromFile(filename) {
  return fs.readFile(filename)
}

// Converts the given relative path to an absolute path
function resolvePath(relativePath) {
  return path.resolve(relativePath)
}

// Converts the given array of quote filenames to absolute paths
async function resolveQuoteFilenames(filenames) {
  return filenames.map(filename => resolvePath(`quotes/${filename}`))
}

// Sends the given quote string to the mynotifier.app API
function sendMessage(message) {
  const apiKey = process.env.MYNOTIFIER_API_KEY
  const projectId = process.env.MYNOTIFIER_PROJECT_ID
  return axios.post('https://api.mynotifier.app', { apiKey, message, type: 'info', project: projectId });
}

async function selectQuote() {
  // My kingdom for a |>
  return listQuoteFiles()
    .then(resolveQuoteFilenames)
    .then(chooseRandomArrayItem)
    .then(readQuoteFromFile)
    .then(normalizeQuoteString)
}

// Controls everything, like a boss
async function main() {
  selectQuote()
    .then(sendMessage)
    .then(() => console.log('Quote flung'))
    .catch(console.error)
}

main()
