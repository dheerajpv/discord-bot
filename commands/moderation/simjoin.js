module.exports = {
    commands: 'simjoin',
    description: 'admin only command that simulates someone joining',
    expectedArgs: '',
    permissions: 'ADMINISTRATOR',
    category: 'Testing',
    run: message => {
        message.client.emit('guildMemberAdd', message.member)
    }
}