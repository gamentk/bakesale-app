import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types';

// Utilities
import { priceDisplay } from '../util';

class DealItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired, // For find the first child
        deal: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    }

    handlePress = () => {
        this.props.onPress(this.props.deal.key);
    };

    render() {
        const { deal } = this.props;

        return (
            <TouchableOpacity
                style={[styles.container, (this.props.id === 0) && { marginTop: 10 }]}
                onPress={this.handlePress}
            >
                <Image
                    source={{ uri: deal.media[0] }}
                    style={styles.image}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{deal.title}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
                        <Text style={styles.cause}>{deal.cause.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 150,
    },
    info: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#bbb',
        borderTopWidth: 0,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    // footer: {
    //     flex: 1,
    //     flexDirection: 'row-reverse',
    //     justifyContent: 'space-between'
    // }, end here (nGame)
    footer: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    cause: {
        flex: 2,
    },
    price: {
        flex: 1,
        textAlign: 'right'
    }
});

export default DealItem;