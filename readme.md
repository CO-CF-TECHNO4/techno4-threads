# TECHNO4 Threads Studio (Total.js Threads v11)

[![Made in EU](https://cdn.componentator.com/eu-small.png)](https://european-union.europa.eu/)

- [Website](https://techno4.online)
- [__Documentation__](https://techno4.online/надбання/фреймворк)
- [Support](https://techno4.online)

## Installation

There are several ways to provide Threads. You can run Threads locally or via PM2 within TECHNO4 FRAMEWORK2.

### Locally

- install [Node.js platform](https://nodejs.org/en/) (>=18.0.0)
- open terminal/command-line:
	- `cd packages/techno4-framework2-threads`
	- `npm install`

__Run__:

```bash
npm run start
```

or directly using node executable (__port is optional__, default `8000` / `8008`):

```bash
node index.js <port>
```

### Threads in Docker

```bash
docker pull totalplatform/flow
docker run -p 8000:8000 totalplatform/flow
```
