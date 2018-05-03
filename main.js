var roleHarvester = require('creeps/role.harvester');
var roleUpgrader = require('creeps/role.upgrader');
var roleBuilder = require('creeps/role.builder');
var autospawn = require('autospawn');
var gc = require('gc');

module.exports.loop = function () {
    gc.run();
    autospawn.run();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
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