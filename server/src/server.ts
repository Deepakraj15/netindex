import express from 'express';

const app = express();
app.use(express.json());

const defaultPort = 3502;

(async () => {
  const port = 9000;
  app.listen(port, () => console.log(`Metrics server running on port ${port}`));
})();
