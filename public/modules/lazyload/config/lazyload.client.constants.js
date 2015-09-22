(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
          // jQuery based and standalone scripts
          scripts: {
            'modernizr':          ['/lib/modernizr/modernizr.js'],
            'icons':              ['/lib/fontawesome/css/font-awesome.min.css',
                                   '/lib/simple-line-icons/css/simple-line-icons.css'],
           //'ngMaterial': ['/vendor/angular-material/angular-material.js']
          },
          // Angular based script (use the right module name)
          modules: [
          
           {name: 'ngMaterial', files: ['/vendor/angular-material/angular-material.js']}

            // {name: 'toaster', files: ['/lib/angularjs-toaster/toaster.js', '/lib/angularjs-toaster/toaster.css']}
          ]
        })
        ;

})();
