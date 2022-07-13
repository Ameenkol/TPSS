module.exports.computeRatio = (arr, Amount) => {

    let Balance = Amount;

    let ratioEntities = [];

    if (Amount <= 0) {
        ratioEntities = arr.map(each => ({ SplitEntityId: each.SplitEntityId, Amount: 0 }))
        return {ratioBalance: Balance, ratioEntities}
    }

    let totalRatio = arr.reduce((acc, val) => acc + val.SplitValue, 0)

    ratioEntities = arr.map((each) => {  

        let commission = (each.SplitValue / totalRatio) * Amount
       
        Balance -= commission;

        return { SplitEntityId: each.SplitEntityId, Amount: commission }
   })
    
   return {ratioBalance: Balance, ratioEntities}    
}