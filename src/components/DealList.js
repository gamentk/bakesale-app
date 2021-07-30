import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import DealItem from './DealItem';

class DealList extends Component {
    static propTypes = {
        deals: PropTypes.array.isRequired,
        onItemPress: PropTypes.func.isRequired,
    }

    render() {
        return (
            <View style={styles.list}>
                <FlatList
                    data={this.props.deals}
                    renderItem={({ item, index }) => <DealItem id={index} deal={item} onPress={this.props.onItemPress} />}
                    keyExtractor={item => item.key}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#eee',
        width: '100%',
    },
});

export default DealList;