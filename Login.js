import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}></Button>
        </View>

    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})

// make a button that will display hello Landon when pressed
export function HelloLandon(props){
    return(
        <View style={styles.login}>
            <Text>Hello Landon</Text>
            <Button title="Landonbutton" onPress={()=>props.setUserLoggedIn(true)}></Button>
        </View>

    );
}

// make a button that will display hello Landon when pressed
export function HelloGrant(props){
    return(
        <View style={styles.login}>
            <Text>Hello Grant</Text>
            <Button title="grantButton" onPress={()=>props.setUserLoggedIn(true)}></Button>
        </View>

    );
}