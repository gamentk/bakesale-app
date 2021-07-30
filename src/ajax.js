async function fetchInitialDeals() {
    try {
        const response = await fetch('https://bakesaleforgood.com/api/deals');
        const responseJson = await response.json();

        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

async function fetchDealDetail(dealId) {
    try {
        const response = await fetch(`https://bakesaleforgood.com/api/deals/${dealId}`);
        const responseJson = await response.json();

        return responseJson;
    } catch (error) {

    }
}

export default {
    fetchInitialDeals,
    fetchDealDetail,
};
