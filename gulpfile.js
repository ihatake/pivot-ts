const gulp = require('gulp');
const del = require('del');
const zip = require('gulp-zip');

function nowDate() {
    const date = new Date();
    function format(s) {
        if (String(s).length < 2) {
            return `0${s}`;
        }
        return s;
    }
    return `${date.getFullYear()}年${format(date.getMonth()+1)}月${format(date.getDate())}日${format(date.getHours())}点${format(date.getMinutes())}分${format(date.getSeconds())}秒`

}
const moveFiles = (bolb, dest) => {
    return () => {
        return gulp.src(bolb).pipe(gulp.dest(dest));
    };
};

gulp.task('clean:dist', async () => {
    await del(['./_server/dist/**/*']);
});

gulp.task('move:dist', moveFiles('dist/**/*', './_server/dist'));

gulp.task('zip', function () {
    return gulp.src('dist/**/*')
        .pipe(zip(`dist${nowDate()}.zip`))
        .pipe(gulp.dest('./'));
});
gulp.task('default', gulp.series('clean:dist', 'move:dist'));