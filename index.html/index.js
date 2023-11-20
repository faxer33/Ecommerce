const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

const cartsSchema = new mongoose.Schema({
  // Definir el esquema de la colección "carts"
});

const messagesSchema = new mongoose.Schema({
  // Definir el esquema de la colección "messages"
});

const productsSchema = new mongoose.Schema({
  // Definir el esquema de la colección "products"
});

const Cart = mongoose.model('Cart', cartsSchema);
const Message = mongoose.model('Message', messagesSchema);
const Product = mongoose.model('Product', productsSchema);

module.exports = {
  Cart,
  Message,
  Product,
};
