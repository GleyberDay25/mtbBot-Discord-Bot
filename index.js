const express = require("express");
const app = express();
const { ActivityType } = require("discord.js")
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB();

app.listen(3000, () => {
   console.log("its working");
   })

   app.get("/", (req, res) => {
      res.send("Hello World!")
     })

const Discord = require("discord.js")
const client = new Discord.Client({ intents: ['Guilds','GuildMessages','MessageContent', 'GuildMembers'] })

const canvacord = require("canvacord")

client.on("guildMemberAdd", async member => {
  if(member.guild.id !== "1119595772061679668") return;
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setColor("title", "#2596be")
  .setColor("username-box", "#041014")
  .setColor("discriminator-box", "#041014")
  .setColor("message-box", "#041014")
  .setColor("border", "#2596be")
  .setColor("avatar", "#041014")
  .setBackground("https://c4.wallpaperflare.com/wallpaper/60/689/309/bike-commencal-bicycle-mountain-bike-wallpaper-preview.jpg")
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.AttachmentBuilder(await welcomeCard.build(), "welcome.png")
  const welcomeChannel =
client.channels.cache.get("1120693666558775398");
  welcomeChannel.send({content: member.user.toString(), files: [attachment]});

})

client.on("guildMemberRemove", async member => {
  if(member.guild.id !== "1119595772061679668") return;
  const welcomeCard = new canvacord.Leaver()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setColor("title", "#2596be")
  .setColor("username-box", "#041014")
  .setColor("discriminator-box", "#041014")
  .setColor("message-box", "#041014")
  .setColor("border", "#2596be")
  .setColor("avatar", "#041014")
  .setBackground("https://c4.wallpaperflare.com/wallpaper/60/689/309/bike-commencal-bicycle-mountain-bike-wallpaper-preview.jpg")
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.AttachmentBuilder(await welcomeCard.build(), "bye.png") 
      
   const leave = client.channels.cache.get("1120693666558775398");
  leave.send({content: member.user.toString(), files: [attachment]});

})

client.on("messageCreate", async message => {
  if(message.content === "mtb.help") {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
            if(cmdBal === null) cmdBal = 0
    let help = new Discord.EmbedBuilder()
    .setTitle("mtbBot Help Menu")
    .addFields({name: '|-INFO-|', value: 'mtb.ping, mtb.botinfo, mtb.invite, mtb.support, mtb.viewcmdsused'}, {name: '|-BRAND-INFO-|', value: 'Usage: `mtb.brand[brand]` \n Brands: Giant, GT, Marin, Co-op, Rocky Mountain, Salsa, Santa Cruz, Specialized, Trek, Nukeproof, Canyon, Cannondale, Diamondback, Ibis, Propain'}, {name: '|-DAILY-|', value: 'mtb.dailybike, mtb.dailyfork'}, {name: '|-TOP-5-|', value: 'mtb.top5bikes, mtb.top5brands, mtb.top5brakes, mtb.top5events'})
    .setFooter({ text: `${cmdBal} Command(s) used on ${message.guild.name}`, iconURL: 'https://i.postimg.cc/FHQDX429/mtbBot.png'})

    const confirm = new ButtonBuilder()
			
			.setLabel('Invite')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=1119584451505180712&permissions=8&scope=bot')
      .setEmoji('1119757911229464626')
			.setStyle(ButtonStyle.Link);

    const support = new ButtonBuilder()
    .setLabel('Support')
    .setURL('https://discord.gg/yFnuAAAAgG')
      .setEmoji('1119835368297083031')
    .setStyle(ButtonStyle.Link);
    
    const website = new ButtonBuilder()
    .setLabel("Website (BETA)")
    .setURL("https://mtbbot.gleyberdaywithmangos25.repl.co/")
      .setEmoji('1119835723466559519')
    .setStyle(ButtonStyle.Link);

    const policy = new ButtonBuilder()
    .setLabel("Privacy Policy")
    .setURL("https://mtbbot.gleyberdaywithmangos25.repl.co/policy.html")
      .setEmoji('1119834416122966099')
    .setStyle(ButtonStyle.Link);
    
    const row = new ActionRowBuilder()
    .addComponents(confirm, support, website, policy);
    
    message.reply({embeds: [help], components: [row]})
   }
  if(message.content.startsWith("mtb.brandgiant") || message.content.startsWith("mtb.brandGiant")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let giantinfo = new Discord.EmbedBuilder()
    .setTitle("`Giant` Bike Brand Info")
    .addFields({
      name: 'Headquarters', value: "Taichung City, Taiwan & Newbury Park, CA, USA" }, 
               {name: 'Mountain Bike Models', value: "Hardtail: Talon, Fathom, STP, XTC  \n Short-travel: Anthem, Stance \n Mid-travel: Reign, Trance \n e-MTB: Reign E+, Trance E+, Stance E+,"}, {name: 'Price Range', value: '$1,000s – $15,000s'}, {name: 'Website', value: 'https://giant-bicycles.com/us/'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Good Value \n <:mtbPRO:1119757911229464626> World’s largest frame manufacturer with a ton of experience \n <:mtbPRO:1119757911229464626> Good warranty and dealer network', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> A bit generic', inline: true}  
              )
    .setColor("#113FDE")
    .setThumbnail("https://revolutionbikefest.com/wp-content/uploads/2016/08/Giant.png")
message.reply({embeds: [giantinfo]})
  }
  if(message.content.startsWith("mtb.brandgt") || message.content.startsWith("mtb.brandGt") || message.content.startsWith("mtb.brandGT")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let gtinfo = new Discord.EmbedBuilder()
    .setTitle("`GT` Bike Brand Info")
    .addFields({name: 'Headquarters', value: 'Wilton, CT, USA'}, {name: 'Mountain Bike Models', value: 'Hardtail: Zaskar, Avalanche, Aggressor \n Short-travel: Sensor \n Mid-travel: Force \n DH bike: Fury \n MTB: Force AMP+, Force Current'}, {name: 'Price Range', value: '$800s - $8,000s'}, {name: 'Website', value: 'https://www.gtbicycles.com/usa_en/'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Wide range of bike options from racing to recreation \n <:mtbPRO:1119757911229464626> Aluminum and carbon frame options \n <:mtbPRO:1119757911229464626> Good warranty and dealer network', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> Stock components aren’t the best \n <:mtbCON:1119757847014670336> Bikes are on the heavy side', inline: true}
              )
    .setColor("#F1E90E")
    .setThumbnail("https://bmxultra.com/wp-content/uploads/2020/12/gt-logo.jpg")
    message.reply({embeds: [gtinfo]})
  }
  if(message.content.startsWith("mtb.brandmarin") || message.content.startsWith("mtb.brandMarin")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let marininfo = new Discord.EmbedBuilder()
    .setTitle("`Marin` Bike Brand Info")
    .addFields({name: 'Headquarters', value: 'Petaluma, CA, USA'}, {name: 'Mountain Bike Models', value: 'Hardtail: San Quentin, El Roy, Bobcat Trail, Wildcat Trail, Bolinas Ridge, Team Marin, Pine Mountain \n Short-travel: Rift Zone \n Mid-travel: Alpine Trail \n e-MTB: Alpine Trail E'}, {name: 'Price Range', value: '$500s - $6000s'}, {name: 'Website', value: 'https://marinbikes.com/'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Simple designs \n <:mtbPRO:1119757911229464626> One of the original mountain bike brands \n <:mtbPRO:1119757911229464626> Committed to sustainability and minimizing impact', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> Not overly innovative or progressive \n <:mtbCON:1119757847014670336> Few full suspension models to choose from', inline: true})
    .setColor("#040404")
    .setThumbnail("https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_577/https://backbiker.com/wp-content/uploads/2022/08/Marin-bike-brand-logo-1024x577.png")
    message.reply({embeds: [marininfo]})
  }
if(message.content.toLowerCase().startsWith("mtb.dailybike")) {
     let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    const check = await db.get(`daily_${message.author.id}`)
    const timeout = 86400000;
    if(check !== null && timeout - (Date.now() - check) > 0) {
     const { default: ms } = await import(`pretty-ms`);
      const timeLeft = ms(timeout - (Date.now() - check))
      message.reply(`You already used this command in the past 24 hours. Wait until ${timeLeft} is up.`)
    } else {
      let reward = ["Stumpjumper Alloy", "Marin Rift Zone 2", "Pivot Switchblade Race XT", "Spot Ryve 115", "Salsa Timberjack SLX", "Niner Niner RIP 9 RDO 3-Star", "Santa Cruz Bicycles Santa Cruz Tallboy Carbon C S", "Trek Trek Supercaliber 9.9 XTR", "Kona Process 153 29", "Trek Trek Fuel EX 9.9 XTR", "Rocky Mountain Rocky Mountain Growler 20", "Ibis Ripmo V2 XT", "Trek Fuel EX 9.8 GX AXS Gen 6", "Specialized Stumpjumper EVO Comp", "Ibis Ripley GX Eagle", "Polygon Siskiu T8", "Giant Stance 2", "Specialized Fuse Expert", "Specialized Turbo Levo Comp", "Canyon Spectral:ON CF 8", "Fezzari Kings Peak Comp", "Bird Aether 9", "Boardman MTR 8.9", "Devinci Troy Carbon XT 12S LTD", "Propain Hugene Custom", "Vitus Escarpe 29 CRS", "Vitus Mythique 29 VRS", "Carrera Titan X", "Deviate Highlander", "Focus JAM 8.9", "Giant Trance X 1", "Kona Honzo ESD", "Kona Process 134 CR/DL 29", "Marin Hawk Hill 1", "Marin Rift Zone Carbon 2", "Marin Rift Zone 1", "Nukeproof Reactor 290 Alloy Pro", "Polygon Siskiu T7", "YT Jeffsy Uncaged 6"]
      message.reply(reward[Math.floor(Math.random() * reward.length)])
      await db.set(`daily_${message.author.id}`, Date.now())
    }
  }
  if(message.content.startsWith("mtb.brandco-op") || message.content.startsWith("mtb.brandcoop") || message.content.startsWith("mtb.brandCo-op") || message.content.startsWith("mtb.brandCoop")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let coopinfo = new Discord.EmbedBuilder()
      .setTitle("`Co-op` Bike Brand Info")
    .addFields({name: 'Headquarters', value: 'Kent, WA, USA'}, {name: 'Mountain Bike Models', value: 'Hardtail: DRT Hardtails \n Short-travel: DRT Full-Suspension'}, {name: 'Price Range', value: '$600s - $3,000s'}, {name: 'Website', value: 'https://www.rei.com/b/co-op-cycles?cm_mmc=aff_AL-_-209889-_-264045-_-NA&avad=264045_e31473439'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Great Warranty \n <:mtbPRO:1119757911229464626> Good Value \n <:mtbPRO:1119757911229464626> Service discounts if done at REI \n <:mtbPRO:1119757911229464626> Free flat tire changes at REI (labor only)', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> Dated geometry \n <:mtbCON:1119757847014670336> Few models to choose from \n <:mtbCON:1119757847014670336> Often out of stock', inline: true} )
    .setThumbnail("https://images.squarespace-cdn.com/content/v1/587e86d46a496344c850d48e/1593545897333-6PTVDV3I40XP87N0UR4R/IG_SD_COOP+Bikes+Icon.jpg?format=1500w")
    .setColor("#094c08")
    message.reply({embeds: [coopinfo]})
  }
  if(message.content.startsWith("mtb.brandRockymtn") || message.content.startsWith("mtb.brandRockymountain") || message.content.startsWith("mtb.brandrockymtn") || message.content.startsWith("mtb.brandrockymountain")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let rckymtninfo = new Discord.EmbedBuilder()
    .setTitle("`Rocky Mountain` Bike Brand Info")
      .addFields({name: 'Headquarters', value: 'St-Georges, QC, Canada & North Vancouver, BC, Canada'}, {name: 'Mountain Bike Models', value: 'Hardtail: Growler, Fusion \n Short-travel: Element \n Mid-travel: Instinct \n Long-travel: Altitude, Slayer \n e-MTB: Altitude Powerplay, Growler Powerplay, Instinct Powerplay, Fusion Powerplay'}, {name: 'Price Range', value: '$2,000s - $12,000s'}, {name: 'Website', value: 'https://bikes.com/'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Wide dealer network \n <:mtbPRO:1119757911229464626> Aluminum frame options \n <:mtbPRO:1119757911229464626> Good line up of bikes to choose from', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> Short 3-5 year frame warranty \n Short 3-5 year frame warranty \n <:mtbCON:1119757847014670336> Not everyone will love the stiff-feeling frames'})
    .setColor("#6b6d6b")
    .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7urWE8NLP-IcBgy8sxQzcshcnTovoIsDuLmSQB5Xhig&s")
    message.reply({embeds: [rckymtninfo]})
  }
  if(message.content.startsWith("mtb.brandsalsa") || message.content.startsWith("mtb.brandSalsa")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let salsainfo = new Discord.EmbedBuilder()
    .setTitle("`Salsa` Bike Brand Info")
    .addFields({name: 'Headquarters', value: 'Bloomington, MN, USA'}, {name: 'Mountain Bike Models', value: 'Hardtail: Timberjack, Rangefinder \n Short-travel: Horsethief, Spearfish \n Mid-travel: Blackthorn, Rustler \n Long-travel: Cassidy'}, {name: 'Price Range', value: '$1,000s - $7,000s'}, {name: 'Website', value: 'https://salsacycles.com'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Parts and dealer service to any shop with access to QBP \n <:mtbPRO:1119757911229464626> Certified B Corporation', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> Short frame warranty (2-5 years depending on model) \n <:mtbCON:1119757847014670336> Not as progressive or performance-driven as other mtb brands \n <:mtbCON:1119757847014670336> Limited online dealers', inline: true})
    .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_TxCqatu4BgXJzxZsPI4zkHfLljxsUEhAFkN7kbHxQ&s")
    .setColor("#E00b0b")
    message.reply({embeds: [salsainfo]})
  }
  if (message.content === "mtb.ping") {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
 let ping = new Discord.EmbedBuilder()
 .setTitle("<:mtbPingPong:1119757026017431654> Pong!")
 .setDescription(`**${client.ws.ping}ms** Latency!`)
 .setColor("#040404")
 .setFooter({ text: `Requested by ${message.author.username}`,
 iconURL: message.author.displayAvatarURL()
            });
 message.reply({embeds: [ping]})
 }
  if(message.content === "mtb.support") {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let supportEmbed = new Discord.EmbedBuilder()
    .setTitle("Support server!")
    .setURL("https://discord.gg/yFnuAAAAgG")
    .setColor("#040404")
    message.reply({embeds: [supportEmbed]})
  }
  if(message.content === "mtb.invite") {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let inviteEmbed = new Discord.EmbedBuilder()
    .setTitle("Invite mtbBot!")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=1119584451505180712&permissions=8&scope=bot")
    .setColor("#040404")
    message.reply({embeds: [inviteEmbed]})
  }
  if(message.content.startsWith("mtb.botinfo")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let botInfo = new Discord.EmbedBuilder()
    .setTitle("mtbBot Info")
    .setThumbnail("https://i.postimg.cc/FHQDX429/mtbBot.png")
    .addFields({name: 'Bot made by mangosdev#0600', value: 'Discord Dev of multiple bots.'}, {name: 'To get started:', value: 'Type `mtb.help`'}, {name: 'Text Info', value: 'Meet mtbBot, the first ever mountain biking discord bot. Made by a fellow biker for fellow bikers. Get brand info, daily bikes and more!'}, {name: 'Coded in', value: 'discord.js v14.11.0'})
    .setFooter({text: 'Bot Information for mtbBot.', iconURL: 'https://i.postimg.cc/FHQDX429/mtbBot.png'})
  message.reply({embeds: [botInfo]})
  }
  if(message.content === "mtb.brand") {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let brander = new Discord.EmbedBuilder()
    .setTitle("<:mtbCON:1119757847014670336> You forgot to put the brand name!")
    .setDescription("Usage: `mtb.brand[brand]`")
    message.reply({embeds: [brander]})
  }
  if(message.content.startsWith("mtb.brandsantacruz") || message.content.startsWith("mtb.brandSantaCruz") || message.content.startsWith("mtb.brandSantacruz")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let santacruzinfo = new Discord.EmbedBuilder()
    .setTitle("`Santa Cruz` Bike Brand Info")
    .addFields({name: 'Headquarters', value: 'Santa Cruz, CA, USA'}, {name: 'Mountain Bike Models', value: 'Hardtail: Chameleon, Highball \n Short-travel: Tallboy, Blur, 5010 \n Mid-travel: Bronson, Hightower \n Long-travel: Megatower, Nomad \n DH bike: V10 \n e-Bike: Heckler, Bullit'}, {name: 'Price Range', value: '$2,000s – $14,000s'}, {name: 'Website', value: 'https://www.santacruzbicycles.com/en-US'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Frame bearings for life \n <:mtbPRO:1119757911229464626> Lifetime warranty on frames \n <:mtbPRO:1119757911229464626> Extremely well-engineered & easy to work on \n <:mtbPRO:1119757911229464626> Extensive dealer network \n <:mtbPRO:1119757911229464626> Large online small parts availability for many models \n <:mtbPRO:1119757911229464626> Excellent resale value', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> No low-price entry-level price options \n <:mtbCON:1119757847014670336> Some models are only available in carbon', inline: true})
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/9/93/Santacruz_bycicles_logo.png")
    .setColor("#Dc0418")
    message.reply({embeds: [santacruzinfo]})
  }
  if(message.content.startsWith("mtb.brandspecialized") || message.content.startsWith("mtb.brandSpecialized")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let specinfo = new Discord.EmbedBuilder()
    .setTitle("`Specialized` Bike Brand Info")
    .addFields({name: 'Headquarters', value: 'Morgan Hill, CA, USA'}, {name: 'Mountain Bike Models', value: 'Hardtail: Fuse, Rockhopper, Epic Hardtail, Chisel \n Short-travel: Epic \n Mid-travel: Stumpjumper , Status \n Long-travel: Enduro \n DH bike: Demo \n e-Bike: Turbo Kenevo, Turbo Levo'}, {name: 'Price Range', value: '$1,000s - 15,000s'}, {name: 'Website', value: 'https://specialized.com/'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Excellent Warranty \n <:mtbPRO:1119757911229464626> Wide variety of bikes and prices from entry-level to premium', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> So many different models and customizations can be overwhelming', inline: true})
    .setColor("#Fffcfc")
    .setThumbnail("https://logovtor.com/wp-content/uploads/2020/05/specialized-bicycle-components-logo-vector.png")
    message.reply({embeds: [specinfo]})
  }
  if(message.content.startsWith("mtb.brandtrek") || message.content.startsWith("mtb.brandTrek")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let trekinfo = new Discord.EmbedBuilder()
    .setTitle("`Trek` Bike Brand Info")
    .addFields({name: 'Headquarters', value: 'Waterloo, WI, USA'}, {name: 'Mountain Bike Models', value: 'Hardtail: Marlin, Procaliber, Roscoe, X-Caliber \n Short travel: Supercaliber, Top Fuel \n Mid-travel: Fuel EX \n Long-travel: Slash \n DH bike: Session \n e-MTB: Fuel EXe, E-Caliber, Powerfly'}, {name: 'Price Range', value: '$600s - $14,000s'}, {name: 'Website', value: 'https://trekbikes.com/'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Excellent lifetime warranty on frames \n <:mtbPRO:1119757911229464626> Large dealer network \n <:mtbPRO:1119757911229464626> Wide variety of bikes from entry-level to premium \n <:mtbPRO:1119757911229464626> Customize paint and components with Project One online bike builder', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> So many options can be confusing \n <:mtbCON:1119757847014670336> Not as innovative as other brands', inline: true})
    .setThumbnail("https://theloamwolf.com/wp-content/uploads/2020/04/trek-logo.jpg")
    .setColor("#3f0b0b")
    message.reply({embeds: [trekinfo]})
  }
  if(message.content.toLowerCase().startsWith("mtb.dailyfork")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    const fork = await db.get(`dailyFORK_${message.author.id}`)
    const timeout = 86400000;
    if(fork !== null && timeout - (Date.now() - fork) > 0) {
     const { default: ms } = await import(`pretty-ms`);
      const timeLeft = ms(timeout - (Date.now() - fork))
      message.reply(`You already used this command in the past 24 hours. Wait until ${timeLeft} is up.`)
    } else {
      let reward = ["RockShox Lyrik RC2 (2019)", "Fox 36 Factory GRIP2", "Manitou Mezzer Pro (2020)", "Marzocchi Bomber Z1", "RockShox Yari RC Debonair", "Cane Creek Helm MKII", "DT Swiss F 535 ONE", "Formula Selva R", "Manitou Mezzer Expert", "DVO Diamond D1", "X Fusion Trace 36 HLR", "Öhlins RXF 36 Evo", "MRP Ribbon Air", "Rockshox ZEB Ultimate", "Rockshox Pike Select", "Cannondale Lefty Ocho", "Fox Racing Shox 34 Float SC", "DVO Onyx SC D1"]
      message.reply(reward[Math.floor(Math.random() * reward.length)])
      await db.set(`dailyFORK_${message.author.id}`, Date.now())
    }
  }
  if(message.content.startsWith("mtb.brandnukeproof") || message.content.startsWith("mtb.brandNukeproof") || message.content.startsWith("mtb.brandNukeProof")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let nukeproofinfo = new Discord.EmbedBuilder()
    .setTitle("`Nukeproof` Bike Brand Info")
    .addFields({name: 'Headquarters', value: 'Belfast, Northen Ireland'}, {name: 'Mountain Bike Models', value: 'Hardtail: Scout \n Mid-travel: Reactor \n Long-travel: Giga, Mega \n DH bike: Dissent \n e-Bike: Megawatt'}, {name: 'Price Range', value: '$3,000s - $8,000s'}, {name: 'Website', value: 'https://nukeproof.com/'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Worldwide shipping \n <:mtbPRO:1119757911229464626> Good small parts and warranty support \n <:mtbPRO:1119757911229464626> Make XXL bikes \n <:mtbPRO:1119757911229464626> Solid builds', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> Only dealer is Chain Reactions in the UK', inline: true})
    .setColor("#Eaea14")
    .setThumbnail("https://cdn.shopify.com/s/files/1/0552/2050/2659/files/nukeproof-logo-1200x628.png?v=1659616078")
    message.reply({embeds: [nukeproofinfo]})
  }
if(message.content.startsWith("mtb.top5bikes")) {
     let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
  let bestbikes = new Discord.EmbedBuilder()
  .setTitle("Top 5 Mountain Bikes of 2023")
  .setDescription("**1. Santa Cruz Hightower C GX AXS Reserve** \n **2. Yeti SB140 LR Turq** \n **3. Trek Fuel EX 9.9 XX1 AXS** \n **4. Norco Fluid FS A1** \n **5. Scott Genius ST**")
  .setFooter({text: 'According to https://outsideonline.com/', iconURL: 'https://i.postimg.cc/FHQDX429/mtbBot.png'})
  message.reply({embeds: [bestbikes]})
}
  if(message.content.startsWith("mtb.top5brands")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let bestbrands = new Discord.EmbedBuilder()
    .setTitle("Top 5 Mountain Biking Brands 2023")
    .setDescription("**1. Specialized** \n **2. Trek** \n **3. Giant** \n **4. Santa Cruz** \n **5. Canyon Bicycles**")
    .setFooter({text: 'According to https://bikeperfect.com/', iconURL: 'https://i.postimg.cc/FHQDX429/mtbBot.png'})
    message.reply({embeds: [bestbrands]})
  }
  if(message.content.startsWith("mtb.brandcanyon") || message.content.startsWith("mtb.brandCanyon")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let canyoninfo = new Discord.EmbedBuilder()
    .setTitle("`Canyon` Bike Brand Info")
    .addFields({name: 'Headquarters', value: 'Koblenz, Germany & Carlsbad, CA'}, {name: 'Mountain Bike Models', value: 'Hardtail: Grand Canyon, Stoic \n Short-travel: Neuron, Exceed, Lux, Spectral 125 \n Mid-travel: Spectral, Strive \n Long-travel: Torque \n DH bike: Sender \n e-MTB: Spectral:ON, Torque:ON'}, {name: 'Price Range', value: '$1,000s-$7,000s'}, {name: 'Website', value: 'https://canyon.com/'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Factory-direct may mean lower prices \n <:mtbPRO:1119757911229464626> Beautifully designed bikes \n <:mtbPRO:1119757911229464626> Good range of models and options', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> Need to deal directly with Canyon for warranty issues & parts (can’t just bring it to a bike shop) \n <:mtbCON:1119757847014670336> Short 6-year warranty compared to other brands', inline: true})
    .setThumbnail("https://vtlogo.com/wp-content/uploads/2021/10/canyon-bicycles-vector-logo.png")
    .setColor("#Fcfdfd")
    message.reply({embeds: [canyoninfo]})
  }
  if(message.content.startsWith("mtb.top5brakes")) {
       let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
    let bestbrakes = new Discord.EmbedBuilder()
    .setTitle("Top 5 Mountain Bike Brakes 2023")
    .setDescription("**1. Hope Tech 4 E4** \n **2. Sram Guide RE** \n **3. Shimano Deore M6100** \n **4. Shimano Zee** \n **5. TRP Quadiem**")
    .setFooter({text: 'According to https://bikeperfect.com/', iconURL: 'https://i.postimg.cc/FHQDX429/mtbBot.png'})
    message.reply({embeds: [bestbrakes]})
  }
    if(message.content.startsWith("mtb.top5events")) {
         let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
        let bestevents = new Discord.EmbedBuilder()
        .setTitle("The Top 5 Mountain Biking Events")
        .setDescription("**1. Red Bull Valparaíso Cerro Abajo** \n **2. Crankworx Rotorua** \n **3. UCI MTB Cross-Country World Cup opener in the Czech Republic** \n **4. Crankworx Cairns** \n **5. UCI MTB Downhill World Cup opener in Switzerland**")
        .setFooter({text: 'According to https://redbull.com/us-en/best-mtb-events-in-the-world', iconURL: 'https://i.postimg.cc/FHQDX429/mtbBot.png'})
     message.reply({embeds: [bestevents]})   
    }
    if(message.content.startsWith("mtb.viewcmdsused")) {
         let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        if(cmdBal === null) cmdBal = 0
        let cmdsUsedEmbed = new Discord.EmbedBuilder()
        .setTitle(`Commands used for ${message.guild.name}`)
        .setDescription(`${cmdBal} command(s) have been used!`)
        message.reply({embeds: [cmdsUsedEmbed]})
    }
    if(message.content.startsWith("mtb.brandpropain") || message.content.startsWith("mtb.brandPropain")) {
         let cmdBal = await db.get(`cmdsUsed_${message.guild.id}`)
        let usedCmd = 1
        await db.set(`cmdsUsed_${message.guild.id}`, cmdBal + usedCmd)
        let propaininfo = new Discord.EmbedBuilder()
        .setTitle("`Propain` Bike Brand Info")
        .addFields({name: 'Headquarters', value: 'Vogt, Germany'}, {name: 'Mountain Bike Models', value: 'Short-travel: Hugene \n Mid-travel: Tyee \n Long-travel: Spindrift \n DH bike: Rage \n e-Bike: Ekano'}, {name: 'Price Range', value: '$3,000s - $6,000s'}, {name: 'Website', value: 'https://propain-bikes.com/'}, {name: '<:mtbPRO:1119757911229464626> Pros', value: '<:mtbPRO:1119757911229464626> Choose from carbon or aluminum frames \n <:mtbPRO:1119757911229464626> Buy spare parts and accessories straight from the website \n <:mtbPRO:1119757911229464626> Able to customize bike when buying online (colors, components, decals, etc…) \n <:mtbPRO:1119757911229464626> Extensive demo schedule around the world including many festivals', inline: true}, {name: '<:mtbCON:1119757847014670336> Cons', value: '<:mtbCON:1119757847014670336> No entry-level options \n <:mtbCON:1119757847014670336> Only available for online orders from Europe', inline: true})
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyKA69A3gl5tF4-PLx-RvHU18KDZ_Y-EsSHwEo1o&s")
        .setColor("#040404")
        message.reply({embeds: [propaininfo]})
    }
})






client.on("ready", async () => {
  console.log(`${client.user.tag}`)
   function randomStatus() {
 let status = [`mtb.help • ${client.guilds.cache.size.toLocaleString()} Servers`, `Mountain Bikes • ${client.guilds.cache.size.toLocaleString()} Servers`]
 let rstatus = Math.floor(Math.random() * status.length);
 client.user.setActivity(status[rstatus], {type: ActivityType.Listening})
}; setInterval(randomStatus, 5000) 
})

client.login("mtbBot's token")
