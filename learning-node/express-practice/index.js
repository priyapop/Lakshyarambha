const express = require('express');
const app = express();
const PORT = 3000;
// Middleware to parse JSON
app.use(express.json());
// Default route
app.get('/', (req, res) => {
res.send('Hello from Express!');
});
// Start server
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});