module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    connect: {
      test: {
        port: 8000,
        base: ".",
      },
    },
    jasmine: {
      test: {
        src: "src/**/*.js",
        options: {
          version: "5.0.1",
          specs: "spec/**/*.js",
          helpers: "spec/*Helper.js",
          template: require("grunt-template-jasmine-requirejs"),
          sandboxArgs: {
            headless: false,
            args: ["--no-sandbox"],
            timeout: 9000,
          },
          keepRunner: true,
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-jasmine");

  grunt.registerTask("test", function (subTask) {
    var taskList = [["jasmine", subTask].join(":")];
    grunt.task.run(taskList);
  });

  // Default task.
  grunt.registerTask("default", ["test"]);
};
