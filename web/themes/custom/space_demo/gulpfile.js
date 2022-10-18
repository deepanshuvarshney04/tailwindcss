var gulp = require('gulp');
var livereload = require('gulp-livereload')
var sass = require('gulp-sass')(require('sass'));
//var autoprefixer = require('gulp-autoprefixer');
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
var cleanCss = require("gulp-clean-css");
var sassGlob = require("gulp-sass-glob");
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
sass.compiler = require('node-sass');

gulp.task('imagemin', function () {
    return gulp.src('./themes/custom/space_demo/src/images/*') 
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./themes/custom/space_demo/src/images'));
});


gulp.task('sass', done => {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sassGlob())
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([autoprefixer("last 2 version", "ie 8", "ie 9")]))
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'));
    done();
});


gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch(['/assets/css/style.css', './**/*.twig', './assets/js/*.js']);
});