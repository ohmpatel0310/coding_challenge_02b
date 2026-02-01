// This is the inventory for the Brownie Shop

let itemName = "Chocolate";
let unitCost = 0.1;
let currentStock = 1000;
let reorderLevel = 300;
let targetStock = 1500;
let weeklyDemand = 700;
let supplierLeadTimeWeeks = 2;

let weeksOfCover = weeklyDemand > 0 currentStock / weeklyDemand : Infinity; 
let stockDeficit = Math.max(0,targetStock - currentStock);
let reorderQuantity = reorderNow ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

