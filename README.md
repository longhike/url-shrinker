# url-shrinker

a URL minifier written in JavaScript; Node.js/Express back end with a MySQL database, sequelize ORM, and simple hashing method for generating new redirect endpoints

## Installation
Requires node.js, locally installed and running mysql server, and a connection password to replace the environmental variable (if your machine is set up that way).

To run, clone this package, and then run ```npm install``` and ```npm start``` or ```npm run dev``` to use nodemon.

Then, you have two options:
1. clone the [companion server](https://github.com/longhike/url-shrinker-router), install dependancies like above and start the server.  
2. use only this server - go the public/script.js and update the rendered link per the instructions, and then go to routes/api.js and reimpliment the commented out route.

## Functionality
In this MVP version of the app, when target url and alias are entered, they're checked against the database; if the target exists, it'll return the minified url extension that already exists; if not, a new item will be added the database and a new extension returned. 

You can then go to the minified url in your browser, which will find the endpoint in the database and then redirect you to the target url.

## License

### ISC License (ISC)
Copyright 2021 longhike

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.