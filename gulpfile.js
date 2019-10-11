const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence') // sequence funciona se tu tiver usando return em todos metodos

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if(util.env.production) {
        sequence('deps', 'app')
        // gulp.start('deps', 'app') 
    } else {
        sequence('deps', 'app', 'servidor')
        // gulp.start('deps', 'app', 'servidor')
    }
})