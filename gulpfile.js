// compile sass and output css
// reload server and browser

const browserSync = require('browser-sync').create();
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

function css() {
    return src('./sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./'))
        .pipe(browserSync.stream());
}

function html() {
    return src('./views/index.pug')
        .pipe(pug())
        .pipe(dest('./'));
}

exports.default = function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    }
    );
    watch('./sass/*.scss', css);
    watch('./views/*.pug', html);
    watch('./carousel.js').on('change', browserSync.reload);
    watch('./*.html').on('change', browserSync.reload);
}