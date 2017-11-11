const Router = require('express').Router;
const router = new Router();

const AccountController = require('../controllers/account.controller');

router.route('/account/:id').get(AccountController.getAccount);
router.route('/accounts/:query').get(AccountController.searchAccounts);

module.exports = router;