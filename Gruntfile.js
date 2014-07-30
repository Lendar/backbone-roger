module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.initConfig({
        webpack: {
            dist: {
                entry: './backbone-roger.js',
                output: {
                    filename: 'backbone-roger.js',
                    libraryTarget: 'umd',
                    path: 'dist/'
                }
            }
        },
        open: {
            options: {
                delay: 500
            },
            dev: {
                path: 'http://localhost:9000/webpack-dev-server/demo.html'
            }
        },
        'webpack-dev-server': {
            options: {
                port: 9000,
                webpack: '<%= webpack.dist %>',
                publicPath: '/dist/',
                contentBase: './',
            },
            dev: {
                keepAlive: true,
            }
        }
    });

    grunt.registerTask('default', ['webpack:dist']);
    grunt.registerTask('serve', ['open:dev', 'webpack-dev-server']);
};
