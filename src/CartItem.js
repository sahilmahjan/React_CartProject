import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            price:99999,
            title: 'iphone 11 pro',
            qty: 1,
            img: ''
        }
    // or
        // this.increseQuantity=this.increseQuantity.bind(this);
        }
    // applied
    increseQuantity = () => {
        console.log('this.state', this.state);
    }
    render(){
        const { price,title, qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div>
                        <div style={{fontSize:25}}>
                            {title}
                        </div>
                        <div style={{color:'#777'}}>
                        Rs. {price}/-
                        </div>
                        <div style={{color:'#777'}}>
                        Qty: {qty}
                        </div>
                        <div className="cart-item-actions">
                            {/*Brackets
                            */}
                            <img alt="increase"  className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665578.svg" 
                            
                            // or

                            // onClick={this.increseQuantity.bind(this)}
                            onClick={this.increseQuantity}
                            /> 

                            <img alt="decrease"  className="action-icons" src="https://image.flaticon.com/icons/svg/992/992683.svg" />

                            <img alt="delete"  
                            className="action-icons" src="https://image.flaticon.com/icons/svg/1345/1345874.svg" />

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;