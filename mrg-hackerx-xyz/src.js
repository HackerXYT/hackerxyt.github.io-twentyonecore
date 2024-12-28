const express = require("express")
const path = require('path')
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { Intents } = Discord;
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES] });
const app = express()
//NEW
//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})

const activities = [
	{ name: 'youtube.com/hackerxyt', type: 'STREAMING' }
];

app.use(express.static(__dirname + "/server/"), (_, res, next) => {
	app.set('title', 'Site')
});
app.get('/', function(req, res, next) {
	res.render('index.html', { title: 'title' });
});
const port = 3000

const prefix = '!';

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
var d = new Date();

//bot.on = join
client.on("guildMemberAdd", member => {
	if (member.guild.id === "803961416008728576") {
		let welcome = new Discord.MessageEmbed()
			.addFields(
				{ name: 'Dont forget to read the', value: '<#803961416549007368>' }
			)
			.setThumbnail(member.user.avatarURL())
			.setAuthor(`Members Updated!`)
			.setDescription(`<a:ww:857321014145187900><a:ee:857321078157213696><a:ll:857321033271214081><a:cc:857321040333504562><a:oo:857321049980272691><a:mm:857321056611074099><a:ee:857321078157213696><a:rainbowc:857321065416359956> To HackerX's Cave ${member}!`)
			.setTimestamp()
			.setFooter({
				text: "HackerX's Cave"
			})
			.setColor("6600FF");
		client.channels.cache.get("803961416549007365").send({ embeds: [welcome] })
		console.log('User: ' + member.user.username + ' has joined the server!');
		var role = member.guild.roles.cache.find(role => role.id === "803961416037302328");
		member.roles.add(role);
	}
})

//bot.on = leave
client.on("guildMemberRemove", member => {
	let goodbyembed = new Discord.MessageEmbed()
		.setAuthor(`${member.user.tag} just left!`, member.user.avatarURL())
		.setTimestamp()
		.setDescription("Sad! Let's just hope that they enjoyed their stay..")
		.setColor("FF0000");
	client.channels.cache.get("880927065694670858").send({ embeds: [goodbyembed] })
	console.log(`${member.user.username} just left`)
	client.channels.cache.get("866406108527984650").send(`${member} (${member.user.username}) **just left!**`)

		.catch((err) => console.log(err));
});


//READY
client.on("ready", function() {
	client.user.setPresence({ status: 'online', activity: activities[0] });
	//let embed = new Discord.MessageEmbed()
	//.setAuthor(`Notice`)
	//.setTimestamp()
	//.setDescription("Kansa's Servers 61,73 and 21 are down @here")
	//.setColor("FF0000");
	//client.channels.cache.get("808421793924382771").send({ embeds: [embed] })
	//client.user.setActivity("Game"); 
	//client.user.setGame("Game");
	//client.user.setActivity("HackerX's Cave")
	//client.user.setAvatar("./public/dashboard/assets/hackerxbot.png")
	client.user.setPresence(
		{
			activity: {
				name: '=help',
				type: 'LISTENING'
			},
			status: "dnd" // online, idle, invisible, dnd
		}
	)
	//clients
	//privateMessage(client, 'ping', `Pong! **${client.ws.ping}ms**`)
	//ann(client)
	//poll(client)
	//join(client)
	console.log("Started client: HackerX Bot");
});

client.on("messageCreate", message => {
	if (message.content === '!potato') {
		let role = message.guild.roles.cache.get("902267449037181018");
		if (message.member.roles.cache.has(role.id)) {
			const embed = new Discord.MessageEmbed()
				.setTitle(`Error!`)
				.setDescription(`We're Sorry, ${message.author}. But You Already Have The Role **POTATO TEAM🥔**!`)
				.setColor('RED')
			console.log(`${message.author} is now a member of POTATO TEAM🥔`)

			message.channel.send({ embeds: [embed] });
		}

		else {
			if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
			const textembed = new Discord.MessageEmbed()
				.setTitle(`Success!`)
				.setDescription(`Success, ${message.author}! You Have Been Added The Role **POTATO TEAM🥔**!`)
				.setColor('PURPLE')
			console.log(`${message.author} is already a member of POTATO TEAM🥔`)

			message.channel.send({ embeds: [textembed] });
		}
	}

	if (message.content.toLowerCase() === 'Hello') {
		message.channel.send("**Hey! What's Up?**")
	}
	//UWU COM
	if (message.content.startsWith(`!status`)) {
		let role = message.guild.roles.cache.get("864637083980005416");
		if (message.member.roles.cache.has(role.id)) {
			mentionMessage = message.content.slice(7);
			client.user.setActivity(mentionMessage, {
				type: "STREAMING",
				url: "https://www.twitch.tv/hackerxofficial"
			});
			const textembed = new Discord.MessageEmbed()
				.setTitle(`Success!`)
				.setDescription(`Success, ${message.author} You Just Changed <@703137833157656638> Status To**` + mentionMessage + ` **for 10 minutes *(600000 milliseconds)*!`)
				.setColor('PURPLE')
			console.log(`${message.author} changed status to ` + mentionMessage)

			message.channel.send({ embeds: [textembed] });
			setTimeout(function() {
				client.user.setActivity(`=help`, {
					type: "STREAMING",
					url: "https://www.twitch.tv/hackerxofficial"
				});
			}, 600000); //time (1800000) for status to change back to default
		}
		else {
			message.delete({ timeout: 100 /*time unitl delete in milliseconds*/ });
			const textembed = new Discord.MessageEmbed()
				.setTitle(`err`)
				.setDescription(`We're Sorry, ${message.author}. You Need To Have The **uwu❤️** Role To Use This Command..`)
				.setColor('PURPLE')
			console.log(`${message.author} tried to use !status`)

			message.channel.send({ embeds: [textembed] });
		}
	}

	//UWU END
	if (message.content.startsWith(`!meme`)) {
		message.channel.send("Command Unavailable!")
	}
	//MAIN COM

	if (message.content.toLowerCase() === "=help") {
		let embed = new Discord.MessageEmbed()
			.setTitle("𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 | HackerX's Cave")
			.addField("Help+",
				"Αν Γράψετε =help και μετα ενα απο τα παρακατω commands θα σταλθει η χρηση του συγκεκριμενου command!")

			.addField(":rofl: 𝗙𝗨𝗡",
				"!kill, !deadmeme, !rps, πες μου κατι καλο, ?ping, nameme, -dm, !pp")

			.addField(":wrench: 𝗨𝘁𝗶𝗹𝗶𝘁𝘆",
				"=help, status;invisible, botinfo, !invite")


			.addField(":hammer: 𝗠𝗼𝗱𝗲𝗿𝗮𝘁𝗶𝗼𝗻",
				"!warn, -thank")

			.addField("<:uwu:879326484265832458> UwU Exclusive",
				"!status")
			.setColor("RANDOM")
			.setFooter({
				text: "𝙈𝙤𝙧𝙚 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 𝙒𝙞𝙡𝙡 𝘽𝙚 𝙎𝙤𝙤𝙣 𝘼𝙫𝙖𝙞𝙡𝙖𝙗𝙡𝙚! 𝙁𝙤𝙧 𝘽𝙪𝙜𝙨/ 𝙋𝙧𝙤𝙗𝙡𝙚𝙢𝙨 𝘿𝙢 𝙃𝙖𝙘𝙠𝙚𝙧𝙓#0021"
			})
		message.channel.send({ embeds: [embed] })
		console.log("Commands Sent")
	}
})


client.on('messageReactionAdd', async (reaction, user) => {
	if (reaction.message.partial) await reaction.message.fetch();
	if (reaction.partial) await reaction.fetch();

	if (user.bot) return;

	if (reaction.message.channel.id === process.env.RR_CHANNEL_ID) {
		// we are making it into the correct channel
		if (reaction.emoji.name === '📢') {
			await reaction.message.guild.members.cache.get(user.id).roles.add(process.env.ANNOUNCE_ROLE_ID)
			console.log(`${user.id} got the ANNOUNCE_ROLE`);
		}

		// if user responds to ticket, create ticket
		else if (reaction.emoji.name === '🥔') {
			//console.log('inside');
			await reaction.message.guild.members.cache.get(user.id).roles.add(process.env.POTATO_ROLE_ID)
			console.log(`${user.id} got the POTATO_ROLE`)
		}

		else if (reaction.emoji.name === '🥀') {
			await reaction.message.guild.members.cache.get(user.id).roles.add(process.env.FEMALE_ROLE_ID)
			console.log(`${user.id} got the FEMALE_ROLE`)

		}
		else if (reaction.emoji.name === '📩') {
			await reaction.message.guild.members.cache.get(user.id).roles.add(process.env.CUTIES_ROLE_ID)
			console.log(`${user.id} got the CUTIES_ROLE_ID`)

		}
	}
})

/**
 * Handle user if they remove their reaction to bot message
 */
client.on('messageReactionRemove', async (reaction, user) => {
	if (reaction.message.partial) await reaction.message.fetch();
	if (reaction.partial) await reaction.fetch();

	if (user.bot) return;

	if (reaction.message.channel.id === process.env.RR_CHANNEL_ID) {
		if (reaction.emoji.name === '📢') {
			await reaction.message.guild.members.cache.get(user.id).roles.remove(process.env.ANNOUNCE_ROLE_ID)
			console.log(`${user.id} removed ANNOUNCE_ROLE`)
		}
	}
	if (reaction.message.channel.id === process.env.RR_CHANNEL_ID) {
		if (reaction.emoji.name === '🥔') {
			await reaction.message.guild.members.cache.get(user.id).roles.remove(process.env.POTATO_ROLE_ID)
			console.log(`${user.id} removed POTATO_ROLE`)
		}
	}
	if (reaction.message.channel.id === process.env.RR_CHANNEL_ID) {
		if (reaction.emoji.name === '🥀') {
			await reaction.message.guild.members.cache.get(user.id).roles.remove(process.env.FEMALE_ROLE_ID);
			console.log(`${user.id} removed FEMALE_ROLE`)
		}
	}


})

client.login(process.env.token)