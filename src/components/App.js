import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

// Services
import ajax from '../ajax';

// Components
import DealList from './DealList'
import DealDetail from './DealDetail';
import TopNav from './TopNav';

class App extends Component {
    state = {
        deals: [],
        currentDealId: null,
    };

    setCurrentDealId = (dealId) => {
        this.setState({
            currentDealId: dealId,
        });
    };

    getCurrentDeal = () => {
        return this.state.deals.find((deal) => deal.key === this.state.currentDealId);
    };

    async componentDidMount() {
        const deals = await ajax.fetchInitialDeals();

        this.setState({ deals });
    }

    render() {
        return (
            <View style={styles.container}>
                {(this.state.deals.length > 0 && <TopNav />)}
                {
                    (this.state.currentDealId) ? <DealDetail initailDealData={this.getCurrentDeal()} />
                        : (this.state.deals.length > 0) ? <DealList deals={this.state.deals} onItemPress={this.setCurrentDealId} />
                            : <Text style={styles.header}>BakeSale</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 40,
    }
});

export default App;