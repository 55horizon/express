<a href="https://github.com/55horizon/express"><img src="https://bafybeibcao3s4l2uqfkurybtgnbtpxpsaidmdci7gu45pdvicrrjpq4tpq.ipfs.dweb.link/" width="220" alt="OpenAI"></a>

###

# Express Backend

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/55horizon/express/blob/master/LICENSE.md)

### Backend boilerplate with Express for OpenAI

## Getting Started

Clone the repository:

```
gh repo clone 55horizon/express
```

Open repository:

```
cd express
```

Create `.env` file:

```
touch .env
```

Add OpenAI API key to `.env` file:

```
OPENAI_API_KEY=••••••••••••••
```

Install node modules:

```
npm install
```

Run the server on local network:

```
npm start
```

Post prompt:

```
curl -X POST \
  http://localhost:5000/ \
  -H 'Content-Type: application/json' \
  -d '{ "prompt": "Hello, how are you?" }'
```

## Learn More

To learn more, take a look at the following resources:

- [Learn Express](https://expressjs.com/en/starter/installing.html) - learn about Express.
- [OpenAI Documentation](https://platform.openai.com/docs/introduction) - learn about OpenAI features and API.
