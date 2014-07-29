module.exports = function (grunt) {
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
        }
    });

    grunt.registerTask('default', ['webpack:dist']);
};
