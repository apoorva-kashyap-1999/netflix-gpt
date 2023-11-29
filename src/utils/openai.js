import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey:process.env.OPEN_AI_GPT_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});


export default openai;