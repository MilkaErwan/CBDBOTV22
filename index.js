const Discord = require("discord.js") 
const bot = new Discord.Client()

bot.login('NDUxODY5MDIzNzAxODI3NTk0.DfIImA.TRYQJvwik7OYKF_oHE10dTEAxqY')

bot.on('message', function (message) {
    if (message.content === '^livrasons' ) {
        message.reply ('@everyon Commandes en cours de livraisons')
    }
})
bot.on('message', function (message) {
    if (message.content === '^livrer' ) {
        message.reply ('@everyon un produits a etait livrée par Milka')
    }
})
bot.on('message', function (message) {
    if (message.content === '^suspendue' ) {
        message.reply ('@everyon un produits a etait suspendue')
    }
})
bot.on('message', function (message) {
    if (message.content === '^help' ) {
        message.reply ('Les commandes :  ^stat ^staff ^bienvenu ^information ')
    }
})
bot.on('message', function (message) {
    if (message.content === '^stat' ) {
        message.reply ('SE bot crée par Milka (CBD)  ')
    }
})
bot.on('message', function (message) {
    if (message.content === '^staff' ) {
        message.reply ('Fondateur : Milka')
    }
})
bot.on('message', function (message) {
    if (message.content === '^Bienvenu' ) {
        message.reply ('Bienvenue sur le discord de CBD ! "  ')
    }
})
bot.on('message', function (message) {
    if (message.content === '^Information' ) {
        message.reply ('Les recrutements sont OUVERT ! ')
    }
})
bot.on('message', function (message) {
    if (message.content === '^novalide' ) {
        message.reply ('La commandes a etait non valid pour resons : [1] Modele non Respecté ou [2] Nom de domaines payent ne sont pas accepté sauf ( cf / ml / tk / ga) ')
    }
})
bot.on('ready', function () {
    bot.user.setActivity("[^help] Crée par CBD")
})
