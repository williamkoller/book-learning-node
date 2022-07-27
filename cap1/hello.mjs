import { createServer } from 'node:http';

createServer((r, rs) => {
  rs.writeHead(200, { 'Content-Type': 'text/plain' });
  rs.end('Hello World\n');
}).listen(8124, () => console.log('Server running at http://localhost:8124/'));
