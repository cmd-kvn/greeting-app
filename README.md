# Greeting App [1.1.1]

## Usage
In your terminal in this app directory:
```
$ node ./cli.js --plain
hello stranger ## defaults to 'stranger' when no name is provided

$ node ./cli.js kevin --plain
hello kevin // when name is provided
```
```
$ node ./cli.js kevin
 _____________
< hello kevin >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

$ node ./cli.js
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