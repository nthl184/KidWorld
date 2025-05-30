const express = require('express');
const app = express();
const cors = require('cors');
const nationRoutes = require('./routes/nation');

app.use(cors());
app.use(express.json());

app.use('/api/nations', nationRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
