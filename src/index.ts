import * as http from 'http';

const port = process.env.PING_LISTEN_PORT ? Number(process.env.PING_LISTEN_PORT) : 3000;
console.log(`Port: ${port}`);

const server = http.createServer((req, res) => {
  if (req.url === '/ping' && req.method === 'GET') {
    const headers = req.headers;

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    res.end(JSON.stringify(headers));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
