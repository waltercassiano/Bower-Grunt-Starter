module.exports = function (grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', []);
    
    //<%= globalConfig.bower_path %>
    var globalConfig = {
        images: 'images',
        css: 'css',
        fonts: 'fonts',
        scripts: 'js',
        bower_path: 'catalog/view/javascript/assets/'
    };
    
    grunt.initConfig({
        globalConfig: globalConfig,
        wiredep: {
            target: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'index.php'   // .php support...
                ],
                fileTypes: {
                    php: {
                        block: /(([\s\t]*)\/\/--\s*bower:*(\S*)\s*)(\r|.)*?(\/\/--\s*endbower\s*)/gi,
                        detect: {
                            js: /(.+)/gi,
                            css: /(.+)/gi,
                            less: /(.+)/gi,
                        },
                        replace: {
                            js: '$script[] = "{{filePath}}";', //array php
                            css: '$css[] = "{{filePath}}";', //array php
                            less: '$less[] = "{{filePath}}";' //array php
                        }
                    }
                }
            },
           
        }
    });
    
   
}

