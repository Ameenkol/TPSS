# Lannister_TPSS
A payment Service for Flutterwave

The application features payment splitting service which is done by considering split types in the split info of the request object.
The request object's SplitInfo is grouped into the respective "FLAT", "PERCENTAGE" and "RATIO" types.
The "FLAT" is computed first then, "PERCENTAGE" and subsequently "RATIO" SplitType.
Incase, the splitted amount can't go round, the remaining Entities takes zero.
