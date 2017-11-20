const Router = require('express').Router;
const router = new Router();

const AccountController = require('../controllers/account.controller');
const BlockController = require('../controllers/block.controller');

router.route('/blocks').get(BlockController.getBlocks);
router.route('/account/:id').get(AccountController.getAccount);
router.route('/accounts/:query').get(AccountController.searchAccounts);

module.exports = router;