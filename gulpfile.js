// compile sass and output css
// reload server and browser

const browserSync = require('browser-sync').create();
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
    return src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./'))
        .pipe(browserSync.stream());
}

exports.default = function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    }
    );
    watch('./sass/*.scss', css);
    watch('./*.html').on('change', browserSync.reload);
}