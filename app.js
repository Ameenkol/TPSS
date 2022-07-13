const express = require('express');

const app = express();

app.use(express.json());

const routes = require("./routes/tpss.routes")

app.use(routes);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening on port ${port}`));
