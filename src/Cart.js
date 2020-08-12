import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component {
    constructor(){
        super();
        this.state={
            products: [
                {
                    price:99999,
                    title: 'iphone 11 pro',
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                    price:29999,
                    title: 'Apple Watch',
                    qty: 1,
                    img: '',
                    id:2
                },
                {
                    price:19999,
                    title: 'airpods',
                    qty: 1,
                    img: '',
                    id:3
                }
            ]
        }
        } 
    render(){
        // const arr=[1, 2, 3, 4, 5]; testing vaste
        const { products }=this.state;
        return(
            <div className="cart"> 
             {/* demo for understanding
                { arr .map((item) =>{
                    return item + 5
                }) 
                }                 */}
               
                
                {products.map((product) =>{
                    
                    return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    // func={() => console.log('sdsd')}                    
                    // isloggedin={false}
                    // jsx={<h1>Apple Products  </h1>}
                    />
                    )
                })}
            </div>
        );
    }
}

export default Cart;