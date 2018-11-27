exports.run = (client, member) => {
var role = member.guild.roles.find('name', 'Trebled Soul')
var role2 = member.guild.roles.find('name', 'Pie Legion Villager')
member.addRole(role);
member.addRole(role2);
};
