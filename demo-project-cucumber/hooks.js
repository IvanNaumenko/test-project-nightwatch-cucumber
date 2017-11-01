
        const chromedriver = require('chromedriver');
        const {defineSupportCode} = require('cucumber');
        var store = require('data-store')('my-app');


        defineSupportCode(({Before, After}) => {
          Before(() => new Promise(resolve => {
         //   console.log('Before start');
            setTimeout(() => {
         //     console.log('Before end');
              resolve();
            }, 0);
          }));

          After((client) => new Promise(resolve => {
            chromedriver.stop();
            setTimeout(() => {
              resolve();
            }, 0);
          }));
        })