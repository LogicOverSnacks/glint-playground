const express = require('express');
const { Git : Server } = require('node-git-server');
const path = require('path');

const app = express();
const port = parseInt(process.env.PORT ?? 8080);

const repos = new Server(path.normalize(path.resolve(__dirname, 'repos')), {
  autoCreate: true,
  checkout: true
});

repos.on('push', push => push.reject());
repos.on('tag', tag => tag.reject());

// only for development
// const cors = require('cors');
// app.use(cors());

app.use(express.static(path.resolve(__dirname, 'docs')));

app.use('/git', (req, res) => repos.handle(req, res));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'docs', 'index.html'));
});

app.listen(port, () => {
  console.log(`glint-repo-host running at http://localhost:${port}`);

  repos.list((err, result) => {
    if (!result || result.length === 0) {
      console.log("No repositories available...");
    } else {
      console.log(result.map(name => `http://localhost:${port}/${name}`));
    }
  });
});
