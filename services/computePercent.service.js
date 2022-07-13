module.exports.computePercent = (arr, Amount) => { 
    let Balance = Amount;

    const percentEntities = arr.map((each) => {

        let commission = (Balance < each.SplitValue || Amount <= 0) ? 0 : (each.SplitValue/100) * Balance;
        
        Balance-= commission;
        
        return { SplitEntityId: each.SplitEntityId, Amount: commission }
    })

    return {percentBalance: Balance, percentEntities}
};