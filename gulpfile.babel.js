import gulp from 'gulp';  
import sourcemaps from 'gulp-sourcemaps';  
import rollup from 'gulp-rollup';  
import rollupIncludePaths from 'rollup-plugin-includepaths';  
import babel from 'gulp-babel';  
import rename from 'gulp-rename';  
import util from 'gulp-util';
import mocha from 'gulp-mocha';

const includePathOptions = {  
    paths: ['src/']
};

gulp.task('build', () => {  
  return gulp.src('src/index.js')
        .pipe(rollup({
          sourceMap: true,
          plugins: [
            rollupIncludePaths(includePathOptions)
          ]
        }))
        .pipe(babel())
        .on('error', util.log)
        .pipe(rename('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});

gulp.task('test', ['build'],() =>{
  return gulp.src('spec/test.js')
         .pipe(mocha({reporter: 'spec', js:'babel-core/register'}))

})

gulp.task('default', ['build', 'test'])