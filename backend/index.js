const express = require('express');
const path = require('path');
const app = express();

// Endpoint to serve CV file
app.get('/download-cv', (req, res, next) => {
  console.log("Download request received");
  const filePath = path.join(__dirname, 'CV', 'Nimeth-Fernando-CV.pdf');
  res.download(filePath, 'Nimeth_Fernando_CV.pdf', (err) => {
    if (err) {
      console.error("Error during file download:", err);
      next(err); // Pass the error to the error-handling middleware
    }
  });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error("An error occurred:", err);
  res.status(500).send("Something went wrong! Please try again later.");
});

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server is running on 34.68.112.16:${PORT}`);
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server is running on port ${PORT}`);
// });

module.exports = app; // Export the app for testing or further use
