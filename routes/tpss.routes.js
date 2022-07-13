const express = require("express");
const { computeFlat } = require("../services/computeFlat.service");
const { computePercent } = require("../services/computePercent.service");
const { computeRatio } = require("../services/computeRatio.service");
const arrayGroupBy = require("../util/arrayGroupBy");

const paymentRoute = express.Router();

paymentRoute.get('/', (req, res) => { 
    return res.status(200).json({message: "Welcome to TPSS"})
})

paymentRoute.post("/split-payments/compute", [], async (req, res) => {

    const { ID,
        Amount,
        Currency,
        CustomerEmail,
        SplitInfo } = req.body;
    
    if (SplitInfo.length > 20) {
        return res.status(400).json({message: "Maximun of 20 entities are required for SplitInfo"})
    }

    const FLAT = 'FLAT';
    const PERCENT = 'PERCENTAGE';
    const RATIO = 'RATIO';

    const grouped = arrayGroupBy(SplitInfo, 'SplitType')

    const { flatBalance, flatEntities } = computeFlat(grouped[FLAT], Amount);

    const { percentBalance, percentEntities } = computePercent(grouped[PERCENT], flatBalance);

    const {ratioBalance: Balance, ratioEntities } = computeRatio(grouped[RATIO], percentBalance)

    return res.status(200).json({ID, Balance, SplitBreakDown: [...flatEntities, ...percentEntities, ...ratioEntities] })
})

module.exports = paymentRoute