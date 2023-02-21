#!/bin/sh
echo =================================================================
echo Enter Commit Comment:
read var_comment
echo =================================================================
echo Uglifying JS and CSS files...
uglifyjs video-popup.js > vouchtube-video-popup.min.js
uglifycss video-popup.css > vouchtube-video-popup.min.css
echo done.
echo =================================================================
echo Pushing to github repository
git add .
git commit -m "$var_comment"
git push 
echo =================================================================
echo done.
