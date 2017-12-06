var casper = require('casper').create();
casper.start('https://www.tsc2.com.br', function() {
    this.fill('form.d-login-form', {
        'user-name': '',
        'password': '',
    }, true);
});


casper.then(function() {
    this.echo('First Page: ' + this.getHTML());
});

/*
casper.waitForSelector('.d-login-form', function() {
    this.echo('Abriu o site: ' + this.getTitle());
});

*/

casper.run();