const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/dist`, {extensions: ['js', 'css', 'svg', 'png', 'ico']}), );
app.use(express.static(`${__dirname}/static`, {index: ['index.js', 'template.js'], extensions: ['js', 'css', 'svg', 'png']}));

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
