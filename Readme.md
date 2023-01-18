Download the github file.

Install node module using 
-> npm install

Visit https://firebase.google.com/
-> Create a project

-> Download google-services.json and paste into android/app

-> Complete all the instruction shown and create the project 

-> Go to Project Settings

-> In project folder in system 

-> Open cmd go to android 

-> And in cmd do gradlew signingReport 

-> Copy sha-1 and sha-56 codes and paste it 

-> Into project setting add key and paste those codes.

-> Paste this in android/app/build.gradle

   apply plugin: 'com.google.gms.google-services'

-> Paste this in android/build.gradle

classpath 'com.google.gms:google-services:4.3.14'

Run Commands
Connect your emulator 

-> adb devices to check device connected

-> npx react-native run-android

-> npm start 
