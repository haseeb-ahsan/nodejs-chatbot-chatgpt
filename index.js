import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {

  console.log(colors.bold.green('Welcome to the Chatbot Program!'));
  console.log(colors.bold.green('You can start chatting with the bot.'));

  const chatHistory = [];

  while (true) {
    const userInput = readlineSync.question(colors.yellow('You: '));

    try {
      // construct messages by iterating the history
      const messages = chatHistory.map(([role, content]) => ({
        role,
        content,
      }));

      //   add latest user input
      messages.push({ role: 'system', content: userInput });

      // Call the Api with user input
      const chatCompletion = await openai.chat.completions.create({
        messages: messages,
        model: 'gpt-3.5-turbo',
      });

      //   Get completion text/content
      const completionText = chatCompletion.choices[0].message.content;

      if (userInput.toLowerCase() === 'exit') {
        console.log(colors.green('Bot: ') + completionText);
        return;
      }

      console.log(colors.green('Bot: ') + completionText);

      //   update history with user input and assistant response
      chatHistory.push(['user', userInput]);
      chatHistory.push(['assistant', completionText]);
    } catch (error) {
      console.error(colors.red(error));
    }
  }
}

main();
