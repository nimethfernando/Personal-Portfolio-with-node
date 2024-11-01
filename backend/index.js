const express = require('express');
const path = require('path');
const app = express();

// Endpoint to serve CV file
app.get('/download-cv', (req, res) => {
  const filePath = path.join(__dirname, 'CV', 'Nimeth-Fernando-CV.pdf');
  res.download(filePath, 'Nimeth_Fernando_CV.pdf');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});

