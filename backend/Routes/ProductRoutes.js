const express=require('express');
const { addItemController, getAllItem, getItemByCode, decreaseQuantity, transactionHandler, increaseQuantity, updatePrice } = require('../Controllers/ProductControllers');
const { getStatsForOneObject, getTotalStats } = require('../Controllers/StatsControllers');
const Router=express.Router();
Router.post('/add-item',addItemController);
Router.post('/decrease-quantity',decreaseQuantity);
Router.post('/update-stock',increaseQuantity);
Router.post('/update-price',updatePrice);
Router.post('/create-transaction',transactionHandler);
Router.get('/get-items',getAllItem);
Router.get('/get-itemByCode',getItemByCode);

//
Router.get('/get-stats-code',getStatsForOneObject);
Router.get('/get-total-stats',getTotalStats);
module.exports=Router;