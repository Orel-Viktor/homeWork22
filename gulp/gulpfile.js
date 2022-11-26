const { task, src, dest, series, watch } = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'))
const jsmin = require('gulp-jsmin');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename')



task('js:build', () => {
    return src('src/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        })).pipe(dest('dist'))
})

task('scss:build', () => {
    return src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist'))
})

task('js-min:build', async () => {
    src('src/*.js')
        .pipe(jsmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist'))
})

task('css-min:build', async () => {
    src('dist/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist/css-min'))
});

task('watch', () => {
    watch('src/*.js', series('js:build'))
    watch('src/*js', series('js-min:build'))
    watch('src/styles/**/*.scss', series('scss:build'))
    watch('dist/*css',series('css-min:build'))

})

