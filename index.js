'use strict';


const inquirer = require('inquirer');

function PromptLoader({ spec }) {

    async function promptTarget(config = {}, { Resource, onCancel }) {
        const answers = await inquirer.prompt(spec.filter(({ name }) => config[name] == null));
        return { ...config, ...answers };
    }

    return promptTarget;
}

module.exports = PromptLoader;
module.exports.study = ({ spec }) => spec.map(({ name }) => name);
