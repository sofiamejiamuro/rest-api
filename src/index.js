const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port',process.env.PORT || 3000);
app.set('json spacer', 2)

// middleware
// permite ver por consola lo que va llegando al servidor
app.use(morgan('dev'));
//app.use(morgan('combined'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// routes
app.use(require('./routes/index'))

// starting the server
app.listen(3000, () => {
  console.log(`Server on port ${app.get('port')}`);
});
