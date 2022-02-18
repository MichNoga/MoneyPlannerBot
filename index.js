const TelegramApi = require("node-telegram-bot-api");
const { gameOptions, againOptions } = require("./options");
const token = "**";

const bot = new TelegramApi(token, { polling: true });

const chats = {};

const startGame = async (chatId) => {
  await bot.sendMessage(chatId, "Угадай цифру от 0 до 9");
  const randomNumber = Math.floor(Math.random() * 10);
  chats[chatId] = randomNumber;
  await bot.sendMessage(chatId, "Можно", gameOptions);
};

const start = () => {
  bot.setMyCommands([
    { command: "/start", description: "Сказать привет" },
    { command: "/info", description: "Узнать свою суть" },
    { command: "/game", description: "Узнать свою удачу" },
    { command: "/nothing", description: "ничего" },
    { command: "/game", description: "Узнать свою удачу" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg);

    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.ru/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/1.webp"
      );
      return bot.sendMessage(chatId, `Привет, ${msg.from.first_name}`);
    }

    if (text === "/info") {
      return bot.sendMessage(chatId, `Ты - ${msg.from.first_name}`);
    }

    if (text === "/game") {
      return startGame(chatId);
    }

    return bot.sendMessage(chatId, "Шо? Нажми меню");
  });

  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    // bot.sendMessage(chatId, chats[chatId]);
    // bot.sendMessage(chatId, data === chats[chatId]);
    if (data == "/again") {
      return startGame(chatId);
    }
    if (data == chats[chatId]) {
      return await bot.sendMessage(chatId, "Это победа", againOptions);
    } else {
      bot.sendMessage(chatId, `Это ${data}, не ${chats[chatId]}`, againOptions);
    }

    console.log(msg);
  });
};

start();
