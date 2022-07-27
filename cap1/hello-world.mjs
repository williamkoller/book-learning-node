import { createServer } from 'node:http';
import fs from 'node:fs';
import url from 'node:url';

createServer(function (r, rs) {
  let name = url.parse(r.url, true).query.name;
  if (name === undefined) name = 'world';
  if (name == 'burningbird') {
    let file = 'img/phoenix.png';
    fs.stat(file, function (err, stat) {
      if (err) {
        console.error(err);
        rs.writeHead(200, { 'Content-Type': 'text/plain' });
        rs.end('Sorry, Burningbird ins`t around right now \n');
      } else {
        const img = fs.readFileSync(file);
        rs.contentType = 'image/png';
        rs.contentLength = stat.size;
        rs.end(img, 'binary');
      }
    });
  } else {
    rs.writeHead(200, { 'Content-Type': 'text/plain' });
    rs.end('Hello ' + name + '\n');
  }
}).listen(8124, () => console.log('Server running at http://localhost:8124/'));
