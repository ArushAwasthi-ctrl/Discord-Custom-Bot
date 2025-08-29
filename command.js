
import { REST, Routes } from 'discord.js';
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTQxMTAzNjM5Mjg3NTYyNjQ5Ng.GzuPuN.dcCAuqU8p6lkODeoMN0SVpynod8lw07H-IoD5Q");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1411036392875626496'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}