const { task, src, dest } = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'))

task('js:build', () => {
    return src('src/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        })).pipe(dest('dist'))
})

task('sass:build', ()=>{
    return src('src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist'))
})