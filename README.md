# library-example

## Installation
For install, please download the project and execute:
```
$ npm install
```
## Grunt tasks
### Default
The grunt-default task has the watch for generate automatically the CSS files, and also run the servers for dev test.

To execute this task, you only need to run
```
$ grunt
```
### createStyles
The grunt-createStyles task generates the CSS and minify them.

To execute this task, you only need to run
```
$ grunt createStyles
```
### createPublic
The grunt-createPublic task generates the minified versions for production and put them into the public folder.

To execute this task, you only need to run
```
$ grunt createPublic
```

### runPublicServer
The grunt-runPublicServer task run a server showing the public folder files, this is for a preview of the page.

To execute this task, you only need to run
```
$ grunt runPublicServer
```
