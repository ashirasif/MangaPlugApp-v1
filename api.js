
import React from 'react';


import {
  Platform,
  PermissionsAndroid,
} from 'react-native';

// Import RNFetchBlob for the file download
import RNFetchBlob from 'rn-fetch-blob';


// function to check permissions
const checkPermission = async (url, name) => {

if (Platform.OS === 'ios') {
    downloadFile(url);
} else {
    try {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
        title: 'Storage Permission Required',
        message:
            'Application needs access to your storage to download File',
        }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Start downloading
        downloadFile(url, name);
    } else {
        // If permission denied then show alert
        Alert.alert('Error','Storage Permission Not Granted');
    }
    } catch (err) {
    // To handle permission related exception
    console.log("++++"+err);
    }
}
};

// function to download file

const downloadFile = (url, name) => {
let file_ext = ".zip";

// config: To get response by passing the downloading related options
    // fs: Root directory path to download
    const { config, fs } = RNFetchBlob;
    let RootDir = fs.dirs.DownloadDir;
    console.log(RootDir);
    let options = {
        fileCache: true,
        addAndroidDownloads: {
        path:
            RootDir+"/"+
            name+ 
            file_ext,
        notification: true,
        useDownloadManager: true,   
        },
    };
    config(options)
        .fetch('GET', url);
};


// function to get fileext.
const getFileExtention = fileUrl => {
return /[.]/.exec(fileUrl) ?
            /[^.]+$/.exec(fileUrl) : undefined;
};


export default checkPermission;


