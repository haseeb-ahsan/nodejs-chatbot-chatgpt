# nodejs-chatbot-chatgpt
# Chatbot Program

This is a simple chatbot program that utilizes OpenAI's GPT-3.5-turbo model to interact with users in a conversational manner. The chatbot keeps track of the conversation history to maintain context throughout the interaction.

![Screenshot from 2024-06-03 17-32-49](https://github.com/haseeb-ahsan/nodejs-chatbot-chatgpt/assets/84566594/7c5f577d-fc92-4d9f-8ff7-b0c92e8a62d0)


## Features

- Interactive command-line interface for chatting with the bot.
- Keeps track of conversation history.
- Supports exiting the chat by typing 'exit'.

## Prerequisites

- Node.js installed on your machine.
- An OpenAI API key.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/chatbot-program.git
    cd chatbot-program
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your OpenAI API key:
    ```
    OPENAI_API_KEY=your_openai_api_key_here
    ```

## Usage

1. Run the chatbot program:
    ```bash
    node index.js
    ```

2. Start chatting with the bot. Type your message and press Enter.

3. To exit the chat, type `exit` and press Enter.

## Code Overview

### `config/open-ai.js`

This file configures the OpenAI API client using the API key from the `.env` file.

```javascript
import { OpenAI } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default openai;

**`index.js`**
This is the main file that runs the chatbot program. It handles user input, calls the OpenAI API, and manages the conversation history.
