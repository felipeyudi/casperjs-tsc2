var fs = require('fs');
var configPath = 'config/config.json';
var config = JSON.parse(fs.read(configPath));
console.log('Lendo configuracoes ',configPath);

var casper = require('casper').create();
casper.start('https://www.tsc2.com.br', function() {
    this.fill('form.d-login-form', {
        'user-name': config.username,
        'password': config.password,
    }, true);
});


casper.then(function() {
    this.echo('First Page: ' + this.getHTML());
});

casper.run();