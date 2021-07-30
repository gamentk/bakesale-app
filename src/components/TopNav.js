import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class TopNav extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>BakeSale</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        padding: 5,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#bbb'
    },
    header: {
        fontSize: 20,
        marginLeft: 10,
    }
});

export default TopNav;