const express = require('express');
const app = express();
const passwordRoutes = require('./passwordStrengthRoutes');
const ecomRoutes = require('./ecommerceRoutes');
app.use('/password', passwordRoutes);
app.use('/', ecomRoutes);

const PORT = 7001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
