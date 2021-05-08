import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import Order from './Order';
import './Orders.css';
import { useStateValue } from './StateProvider';

function Orders() {
    const [{basket, user}, dispatch] = useStateValue(); //React context API
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        //if statement to protext from user = null
        if(user){
            db
                .collection('users')
                .doc(user?.uid) //pulled from Rect context API
                .collection('orders')
                .orderBy('created', 'desc') //Orders pulled in descending order
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id, // kept for future needs => paymentIntent
                        data: doc.data() // amount, basket, created => array
                })))
            })
        } else {
            setOrders([]); // set Orders into EMPTY arrray
            }

        
    }, [user])

    return (
        <div className="orders">
            <h1>Your orders</h1>

            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders