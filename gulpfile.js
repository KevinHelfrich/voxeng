var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', ['build-engine-typescript','copy-examples']);

gulp.task('build-engine-typescript', function(){
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'voxEng.js'
        }))
        .pipe(gulp.dest('build/engine'))
        .pipe(gulp.dest('build/examples'));
});

gulp.task('copy-examples', function(){
    return gulp.src('examples/**/*.html')
        .pipe(gulp.dest('build/examples'));
});
