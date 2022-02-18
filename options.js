module.exports = {
  gameOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "Тыц", callback_data: "не угадал" },
          { text: "Тыц", callback_data: "4" },
          { text: "Тыц", callback_data: "3" },
        ],
        [
          { text: "Тыц", callback_data: "5" },
          { text: "Тыц", callback_data: "4:20" },
          { text: "Тыц", callback_data: "6" },
        ],
        [
          { text: "Тыц", callback_data: "1" },
          { text: "Тыц", callback_data: "7" },
          { text: "Тыц", callback_data: "9" },
        ],
        [
          { text: "Тыц", callback_data: "8" },
          { text: "Тыц", callback_data: "2" },
          { text: "Тыц", callback_data: "Время поесть" },
        ],
        [{ text: "Тыц", callback_data: "0" }],
      ],
    }),
  },

  againOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: "Ещё разок", callback_data: "/again" }]],
    }),
  },
};
