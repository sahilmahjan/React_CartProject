import React from 'react';
import CartItem from './CartItem'

const Cart = (props) => {

    // adding functionality to cart component
    // constructor(){
    //     super();
    //     this.state={
    //         products: [
    //             {
    //                 price:99999,
    //                 title: 'iphone 11 pro',
    //                 qty: 1,
    //                 img: '',
    //                 id:1
    //             },
    //             {
    //                 price:29999,
    //                 title: 'Apple Watch',
    //                 qty: 1,
    //                 img: '',
    //                 id:2
    //             },
    //             {
    //                 price:19999,
    //                 title: 'airpods',
    //                 qty: 1,
    //                 img: '',
    //                 id:3
    //             }
    //         ]
    //     }
    //     } 

    //     handleIncreaseQuantity = (product) => {
    //         console.log('Hey please inc qty of ', product);
    //         const {products} = this.state;
    //         const index =products.indexOf(product);

    //         products[index].qty +=1;

    //         this.setState({
    //             products: products
    //         })
    //     }

    //     handleDecreaseQuantity = (product) => {
    //         console.log('Hey please inc qty of ', product);
    //         const {products} = this.state;
    //         const index =products.indexOf(product);

    //         if(products[index].qty==0)
    //         return;

    //         products[index].qty -=1;

    //         this.setState({
    //             products: products
    //         })
    //     }

    //     handleDeleteProduct = (id) => {
    //         const {products} = this.state;
    //         const items = products.filter((item) => item.id !== id); //[{}]

    //         this.setState({
    //             products: items
    //         })
    //     }




    // const arr=[1, 2, 3, 4, 5]; testing vaste
    const { products } = props;
    return (
        <div className="cart">
            {/* demo for understanding
                { arr .map((item) =>{
                    return item + 5
                }) 
                }                 */}


            {products.map((product) => {
                return (
                    <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onhandleDeleteProduct={props.onhandleDeleteProduct}
                    // func={() => console.log('sdsd')}                    
                    // isloggedin={false}
                    // jsx={<h1>Apple Products  </h1>}
                    />
                )
            })}
        </div>
    );

}

export default Cart;