This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start mySideMenu sidemenu
```

Then, to run it, cd into `mySideMenu` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```
#starting 
```bash
ionic start --help
ionic start MyApp sidemenu
```
# adding platform
```bash
ionic cordova platform --help
ionic cordova platform add android
ionic cordova platform add ios
cordova platform add browser --save
```
#adding native support
```bash
npm install @ionic-native/core --save
```
#build
```bash
ionic cordova build android --prod --release
ionic cordova build ios --prod --release
```
#storage
```bash
ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic-native/sqlite
```
#Geolocation
```bash
ionic cordova plugin add cordova-plugin-geolocation 
npm install --save @ionic-native/geolocation
#camera 

#Device Motion
```bash
ionic cordova plugin add cordova-plugin-device-motion
npm install --save @ionic-native/device-motion

#angular
```bash
npm install firebase --save
npm install  --save angularfire2
 ```
#running the project
```bash
ionic serve -c
```
#third party javascript
```bash
npm install -g lodash --save
```
```bash
ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyBEUim66RaUR0fvWrkYeNVQPmlcmtSXzck"
AIzaSyBEUim66RaUR0fvWrkYeNVQPmlcmtSXzck
```
```bash
$ ionic generate 
$ ionic generate component
$ ionic generate directive
$ ionic generate page
$ ionic generate pipe
$ ionic generate provider
$ ionic generate tabs
$ ionic generate component foo
$ ionic generate page Login
$ ionic generate page Detail --no-module
$ ionic generate page About --constants
$ ionic generate pipe MyFilterPipe

```

Substitute ios for android if not on a Mac.

