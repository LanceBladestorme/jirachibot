exports.run = (client, member) => {
var role = member.guild.roles.find('name', 'Trebled Soul')
member.addRole('Trebled Soul');
};
