# Node JS Basic

Node.js fundamentals: CLI programs, file I/O (sync/async), HTTP servers (native `http` module), Express servers, and ES6 with Babel.

## Tasks

| Task | File | Description |
|------|------|-------------|
| 0 | `0-console.js` | `displayMessage` prints to STDOUT |
| 1 | `1-stdin.js` | Interactive stdin reader with prompt |
| 2 | `2-read_file.js` | Synchronous CSV student parser |
| 3 | `3-read_file_async.js` | Async CSV student parser (Promise) |
| 4 | `4-http.js` | Minimal HTTP server (`http` module) |
| 5 | `5-http.js` | HTTP server with `/students` endpoint |
| 6 | `6-http_express.js` | Minimal Express server |
| 7 | `7-http_express.js` | Express server with `/students` |
| 8 | `full_server/` | Structured Express app (controllers, routes, Babel) |

## Usage

```bash
# Run a script
node 0-console.js

# HTTP servers (port 1245)
node 4-http.js
node 5-http.js database.csv

# Express servers
node 6-http_express.js
node 7-http_express.js database.csv

# Full server (Babel)
npx babel-node full_server/server.js database.csv
```
