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
                            <img alt="increase"  className="action-icons" src="https://as1.ftcdn.net/jpg/02/01/58/70/500_F_201587024_jEB8rsvrFtd0jwBF2A7oUnZ2KGYYddmC.jpg" />
                            <img alt="decrease"  className="action-icons" src="https://as2.ftcdn.net/jpg/02/78/84/57/500_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg" />
                            <img alt="delete"  className="action-icons" src="https://as2.ftcdn.net/jpg/03/28/80/75/500_F_328807573_grRnLlIgRR8wQMXtLDdNQSwQepRK0aFX.jpg" />

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