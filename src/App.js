import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';

class App extends React.Component {

  constructor(){
        super();
        this.state={
            products: [
                {
                    price:99999,
                    title: 'iphone 11 pro',
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1593158066451-95a10517b62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
                    id:1
                },
                {
                    price:29999,
                    title: 'Apple Watch',
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
                    id:2
                },
                {
                    price:19999,
                    title: 'airpods',
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1525825691042-e14d9042fc70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
                    id:3
                }
            ]
        }
        } 

        handleIncreaseQuantity = (product) => {
            console.log('Hey please inc qty of ', product);
            const {products} = this.state;
            const index =products.indexOf(product);

            products[index].qty +=1;

            this.setState({
                products: products
            })
        }

        handleDecreaseQuantity = (product) => {
            console.log('Hey please inc qty of ', product);
            const {products} = this.state;
            const index =products.indexOf(product);

            if(products[index].qty==0)
            return;

            products[index].qty -=1;

            this.setState({
                products: products
            })
        }

        handleDeleteProduct = (id) => {
            const {products} = this.state;
            const items = products.filter((item) => item.id !== id); //[{}]

            this.setState({
                products: items
            })
        }


        getCartCount = () => {
          const {products} = this.state;
          let count = 0;
          products.forEach((product) => {
            count += product.qty;
          })

          return count;
        }
        getCartTotal =() =>{
          const {products} =this.state;
          let cartTotal=0;
          products.map((product) =>{
            cartTotal =cartTotal + product.qty*product.price;
          })
          return cartTotal;
        }
        
  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
        products={products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onhandleDeleteProduct ={this.handleDeleteProduct}
        />
        <div style={{ fontSize:32, padding:10, color:"red"}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}




export default App;
