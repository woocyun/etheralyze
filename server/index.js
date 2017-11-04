require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const routes = require('./config/routes');

const app = express();

app.set('port', process.env.PORT || 9000);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api', routes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${ app.get('port') }`);
});