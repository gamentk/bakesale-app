import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';

// Services
import ajax from '../ajax';
import { priceDisplay } from '../util';

class DealDetail extends Component {
    static propTypes = {
        initailDealData: PropTypes.object.isRequired,
    }

    state = {
        deal: this.props.initailDealData,
        detail: null,
    }

    async componentDidMount() {
        const dealDetail = await ajax.fetchDealDetail(this.state.deal.key);

        this.setState({
            detail: dealDetail,
        });
    }

    render() {
        const { deal, detail } = this.state;

        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <Image
                        source={{ uri: deal.media[0] }}
                        style={styles.image}
                    />
                    <View style={styles.footer}>
                        <Text style={styles.title}>{deal.title}</Text>
                        <View style={styles.infoBox}>
                            <View style={styles.info}>
                                <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
                                <Text style={styles.cause}>{deal.cause.name}</Text>
                            </View>
                            {
                                detail &&
                                <View style={styles.user}>
                                    <Image
                                        source={{ uri: detail.user.avatar }}
                                        style={styles.avatar}
                                    />
                                    <Text style={styles.name}>{detail.user.name}</Text>
                                </View>
                            }
                        </View>
                        {
                            detail &&
                            <Text style={styles.description}>{detail.description}</Text>
                        }
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eee'
    },
    container: {
        flex: 1,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 150,
    },
    footer: {
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoBox: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
        borderStartWidth: 5,
        borderStartColor: '#ccc'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cause: {
        fontSize: 16,
    },
    avatar: {
        width: '100%',
        height: 75,
        borderRadius: 50,
        marginBottom: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    description: {
        lineHeight: 20,
        fontSize: 15,
    }
});

export default DealDetail;
