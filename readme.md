# Crio winter of doing - XMeme

Backend application for XMeme. written in nodeJS. A deployed version can be found on [https://excess30-xmeme-backend.herokuapp.com](https://excess30-xmeme-backend.herokuapp.com).

## Endpoints:

- `/post/all`: Gets all the posts
- `/post`: POST endpoint to post a meme

## Development

Run the server using:

```
$ PORT=<port> MONGODB_URL=<url> npm run dev
```

## Build

Build using:

```
$ npm tsc
```

and run the build using:

```
$ npm start
```
