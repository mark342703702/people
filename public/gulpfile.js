var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');//添加私有属性前缀

gulp.task('sass', function(){
    var processors = [
        autoprefixer
    ];
    
    return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('css'))

});

//页面自动刷新
gulp.task('reload', function(){
    livereload.listen();
    gulp.watch(['../views/**/*.hbs', 'css/**/*.css', 'js/**/*.js'], function(event){
      livereload.changed(event.path);  
    });
 });


gulp.task('default',['sass','reload'], function(event){
    gulp.watch(['sass/**/*.scss'], ['sass']);
});

