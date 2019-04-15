# RNStructure


Create react-native app

`react-native init myApp`


install react-navigation library

`npm install --save react-navigation`


install react-native-gesture-handler

`npm install --save react-native-gesture-handler`

link library

`react-native link react-native-gesture-handler`

install react-redux

`npm install --save react-redux`

install redux

`npm install --save redux`

install redux-thunk

`npm install --save redux-thunk`

install react-navigation-redux-helpers

`npm install --save react-navigation-redux-helpers`


run below command for generate main.jsbundle

`react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios' --assets-dest='./ios'`

generate releaseStaging build

Copy debug.keystore file from `~/.android` and paste into `root/android/keyStores/`

Add below code into `root/android/app/build.gradle` file

`buildTypes {
        releaseStaging {
            signingConfig signingConfigs.debug
            //  matchingFallbacks=['debug','release']      
        }
        release {
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"   
        }
    }
    `
