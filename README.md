# it-mentor
It-mentors - service what is help to connect mentor and mentee for study IT-technology.

## How to Install
Update your OS... :smiley:
```
$ sudo apt-get update
$ sudo apt-get upgrade
```
... and set up Mongo:
```
$ sudo apt-get install mongodb
```
Check install:
```
$ sudo netstat -tnlp | grep mongo
```
Output must looks like that:
```
tcp        0      0 127.0.0.1:27017         0.0.0.0:*               LISTEN      4306/mongod
```

### Install Node and NPM
Install [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) with [NVM](https://github.com/creationix/nvm) first

Go to [NVM GitHub repo](https://github.com/creationix/nvm) and follow the instruction or just put this command in your terminal :smile:  
```
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
```
Close and reopen your terminal to start using nvm  
After that run in terminal
```
$ nvm install node
```
Check install:
```
$ node -v
$ npm -v
```

Then you should install bower and gulp
```
$ npm i -g bower
$ npm i -g gulp-cli
```
### Install Git
Install [git](https://git-scm.com)
For debian-like OS:
```
$ sudo apt-get install git
```
For Windows [click the link](https://git-scm.com/download/win)

### Clone project :smile:
Write next commands in terminal:
```
$ mkdir path/to/projects/folder
$ cd path/to/projects/folder
$ git clone https://github.com/itmozok-kiev/it-mentor.git
$ cd it-mentor
```

Install dependencies:
```
$ npm i
$ bower i
```

... and try to start
```
$ gulp serve
```
