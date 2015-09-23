module.exports = function  (grunt) {
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/main.css': 'assets/stylesheets/src/main.scss',
          'assets/stylesheets/about.css': 'assets/stylesheets/src/about.scss',
           'assets/stylesheets/services.css': 'assets/stylesheets/src/services.scss',
            'assets/stylesheets/info.css': 'assets/stylesheets/src/info.scss',
          
          
         
        }         
      }
    },

    watch: {
      css: {
       files: ['assets/stylesheets/src/*.scss'],
       tasks: ['sass','cssmin']
     }  
   },
    
   cssmin: {
      target: {
        files: {
          'assets/stylesheets/app.min.css': 
            [
            'assets/stylesheets/main.css',
            'assets/stylesheets/about.css',
            'assets/stylesheets/services.css',
            'assets/stylesheets/info.css'



            ]
        }
      }
    } 
  
});
  
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default' , ['sass','cssmin','watch']);
};





