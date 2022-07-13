module.exports.computeFlat = (arr, amount) => {
    let Balance = amount;
    
    const flatEntities = arr.map((each) => {
        
        let commission =  (Balance < each.SplitValue || amount <= 0)? 0 : each.SplitValue

        Balance-= commission 
                    
        return {SplitEntityId: each.SplitEntityId, Amount: commission}
    })

    return {flatBalance: Balance, flatEntities}
}