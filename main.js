let roleHarvester = require('creeps.role.harvester');
let roleUpgrader = require('creeps.role.upgrader');
let roleBuilder = require('creeps.role.builder');
let autospawn = require('./autospawn');
let gc = require('./gc');

module.exports.loop = function () {
    gc.run();
    autospawn.run();

    for(let name in Game.creeps) {
        const creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
};