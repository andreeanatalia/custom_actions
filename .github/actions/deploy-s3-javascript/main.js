const core = require('@actions/core')
const github = require('@actions/github')
const exec = reuire('@actions/exec') 

function run() {
    core.notice('Hello from my custom JavaScript action!')
}

run()