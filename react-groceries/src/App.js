import './App.css';
import Grocery from './Grocery';

const groceries = [
  {
    item: 'Butterfinger',
    brand: 'Nestle',
    price: '$1.50',
    quantity: 1,
    isPurchased: false
  },
  {
    item: 'Vanilla Ice Cream',
    brand: 'Tillamook',
    price: '$5.49',
    quantity: "1 pint",
    isPurchased: true
  },
  {
    item: 'Susan Cookies',
    brand: 'Safeway',
    price: '$4.99',
    quantity: '1 Pack of 24',
    isPurchased: true
  },
  {
    item: 'Caramel Apple Pops',
    brand: 'Tootsie Roll Industries',
    price: '$2.99',
    quantity: "1 bag",
    isPurchased: false
  },
  {
    item: 'Chocolate Truffles',
    brand: 'Lindt',
    price: '$6.99',
    quantity: "12 oz package",
    isPurchased: false
  },
  {
    item: 'Dr. Pepper Cream Soda',
    brand: 'Dr. Pepper Snapple Group',
    price: '$6.99',
    quantity: "12-pack",
    isPurchased: true
  }
]

function App() {

  const newItem = [ "item", "brand", "price", "quantity"]

  function addToList() {
    newItem.push(groceries)
  }

  return (
    <>
    <div className="Groceries">
       <h1> Grocery List </h1>
         <h2>Add An Item</h2>
       
       <form action="/Grocery" method="POST">
          Item<input type="text" name="item"/><br />
          Brand<input type="text" name="brand"/><br />
          Price<input type="text" name="price"/><br />
          Quantity<input type="text" name="quantity"/>
        </form>
        <br />
          <button onClick={addToList(newItem)}>Submit</button>
        <br />
        <br />
          <button>Remove Purchased</button>
          
       {groceries.map((currentGroceries, i) => {
         if (!currentGroceries.isPurchased) {
          return <Grocery data={currentGroceries} />
         } else {
           return  <p>----Item Purchased----</p>
         }
         
       })}
    </div>
    </>
  );
}

export default App;
