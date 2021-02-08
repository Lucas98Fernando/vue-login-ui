// Variables gull and Sass
var gulp = require('gulp');
var sass = require('gulp-sass');

// Task with gulp to convert Sass to CSS
gulp.task('sass', gulp.series(function () {
    // Caminho dos arquivos que serão convertidos
    return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/assets/scss/*.scss']).pipe(sass()).pipe(gulp.dest('src/assets/css'));
}));

gulp.task('watch', gulp.series(function () {
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/assets/scss/*.scss'], gulp.parallel(['sass']));
}));

gulp.task('default', gulp.series(['sass', 'watch']));