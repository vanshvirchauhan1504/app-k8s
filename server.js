import express from 'express'
import cors from 'cors'

const app = express();
const port = 8000;

const corsOptions = {
  origin: '*', // Allow requests from this origin
  methods: 'GET', // Allow only GET and POST methods
  allowedHeaders: 'Content-Type, Authorization', // Allow specific headers
};

app.use(cors(corsOptions)); // Enable CORS for all routes

// Example route
app.get('/', (req, res) => {
  res.send('Hello Version 3!');
});

// Another route
app.post('/data', (req, res) => {
  // Handle data
  res.json({ message: 'Data received' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
