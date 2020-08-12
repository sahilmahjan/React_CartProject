import React from 'react';

class CartItem extends React.Component {
    // using this in cart because items are added
    // constructor(){
    //     super();
    //     this.state={
    //         price:99999,
    //         title: 'iphone 11 pro',
    //         qty: 1,
    //         img: ''
    //     }
    // // or
    //     // this.increseQuantity=this.increseQuantity.bind(this);
    //     } 





    // applied
    increseQuantity = () => {
        // this.state.qty+=1;
        // console.log('this.state', this.state);

        // set state form 1
        // object form
        // this.setState({
        //     // shallow merging
        //     qty: this.state.qty +1
        // });

        // increase by 3
        // this.setState({
        //     // shallow merging
        //     qty: this.state.qty +3
        // });


        // set state form 2- if prevState required use this
        // function form
        this.setState((prevState) =>{
            return{
                qty: prevState.qty+1
            }
            
        },
        // for console purpose
        //  () =>
        // {
        //     console.log('this.state', this.state);
        // }
        );
        
    }

    decreseQuantity = () => {
        const {qty} = this.state;
        if(qty==0)
        return;
        // this.state.qty+=1;
        // console.log('this.state', this.state);

        // set state form 1
        // object form
        // this.setState({
        //     // shallow merging
        //     qty: this.state.qty +1
        // });


        // set state form 2- if prevState required use this
        // function form
        this.setState((prevState) =>{
            return{
                qty: prevState.qty-1
            }
            
        });
    }



    render(){
        console.log('this.props', this.props);
        const { price,title, qty}=this.props.product;
        return(
            <div className="cart-item">
                {this.props.jsx}
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

                            <img alt="decrease"  className="action-icons" src="https://image.flaticon.com/icons/svg/992/992683.svg" 
                            onClick={this.decreseQuantity}
                            />

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