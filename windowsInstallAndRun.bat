@echo off
echo Installing redis...
pip install redis
echo Redis installation done!
echo ----------------------------------------
echo Installing flask...
pip install Flask
echo Flask installation done!
echo ----------------------------------------
echo Installing jsonify...
pip install jsonify
echo Jsonify installation done!
echo ----------------------------------------
echo Installing flask-cors...
pip install flask-cors
echo Flask-cors installation done!
echo ----------------------------------------
echo Starting backend...
start cmd /k python doc/src/backend/app.py
echo ----------------------------------------
echo Backend started successfully!
echo Starting index.html...
start doc/src/index.html
exit