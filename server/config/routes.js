const Router = require('express').Router;
const router = new Router();

const AccountController = require('../controllers/account.controller');
const BlockController = require('../controllers/block.controller');
const TransactionController = require('../controllers/transaction.controller');

router.route('/blocks').get(BlockController.getBlocks);
router.route('/block').get(BlockController.getBlock);
router.route('/transactions').get(TransactionController.getTransactions);
router.route('/account/:id').get(AccountController.getAccount);
router.route('/accounts/:query').get(AccountController.searchAccounts);

module.exports = router;