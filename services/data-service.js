import firebase from 'react-native-firebase'

export function nameFromServer(){
    return firebase
    .firestore().collection('getData')
};

 