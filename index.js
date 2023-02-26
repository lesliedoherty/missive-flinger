import axios from 'axios';

const apiKey = process.env.MYNOTIFIER_API_KEY;

const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "The best things in life are free. The second best things are very, very expensive.",
    author: "Coco Chanel"
  }
]

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

axios.post('https://api.mynotifier.app', {
  apiKey,
  message: randomQuote.quote,
  description: randomQuote.author,
  type: 'info',
});
