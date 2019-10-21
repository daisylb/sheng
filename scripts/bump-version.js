const { readFileSync, writeFileSync } = require("fs")

const newVersion = process.env.npm_package_version
const readme = readFileSync("README.md").toString()
const newReadme = readme.replace(/sheng@[0-9\.]+/, `sheng@${newVersion}`)
writeFileSync("README.md", newReadme)
