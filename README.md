# Greeting App [1.1.0]

## Usage
In your terminal in this app directory:
```
$ node ./lib/greet.js --plain
hello stranger ## defaults to 'stranger' when no name is provided

$ node ./lib/greet.js kevin --plain
hello kevin // when name is provided
```
```
$ node ./lib/greet.js kevin
 _____________
< hello kevin >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

$ node ./lib/greet.js
 ________________
< hello stranger >
 ----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
## Developer build instructions
1. Clone this repository
2. `$ npm install`

## Coding standards
- indentation = 4 spaces
- use single quotes over double
- semicolons always required