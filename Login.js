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

// make a button that will display hello Matthew when pressed
export function HelloMatthew(props){
    return(
        <View style={styles.login}>
            <Text>Hello Matthew</Text>
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

// make a button that will display "Hello Ryan" when pressed
export function HelloRyan(props){
    return(
        <View style={styles.login}>
            <Text>Hello Ryan</Text>
            <Button title="ryanButton" onPress={()=>props.setUserLoggedIn(true)}></Button>
        </View>
    );
}
export function HelloSamantha(props){
    return(
        <View style={styles.login}>
            <Text>Hello Samantha</Text>
            <Button title="SamanthaButton" onPress={()=>props.setUserLoggedIn(true)}></Button>
        </View>

    );
}

// make a button that will display "Hello Brian" when pressed
export function HelloBrian(props){
    return(
        <View style={styles.login}>
            <Text>Hello Brian</Text>
            <Button title="BrianButton" onPress={()=>props.setUserLoggedIn(true)}></Button>
        </View>

    );
}
