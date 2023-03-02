import '../abhi.css'

import data from '../Menu.json'

import { useSelector, useDispatch } from 'react-redux'
import {addToCart} from '../Store/CartSlice/CartSlice'
import { Link } from 'react-router-dom'






function Abhimenu()
{
    const menus= data.Menu
 
    const dispatch = useDispatch()

    return (
        <>
        
        

        <div class="logo"></div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
              
                <li><Link to='/cart'>MyCart</Link></li>
              
                
            </ul>
        </nav>
  
    
        <section class="dashboard">
            <h2>Dashboard</h2>
            <ul>
                <li>
                    <h3>Inventory Level</h3>
                    <p>1000</p>
                </li>
                <li>
                    <h3>Orders Processed</h3>
                    <p>500</p>
                </li>
                <li>
                    <h3>Sales Figures</h3>
                    <p>10,000 RS. </p>
                </li>
            </ul>
        </section>
        <section class="inventory">
            <h2>AVAILABLE</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Current Stock</th>
                        <th>Reorder Point</th>
                        <th>Add to Cart</th>
                    </tr>
                </thead>
                <tbody>
                {

                    menus.map(it =>(
                        // <div key = {it.menu_id}>

                        // <h2>Menu Name  : {it.menu_name}</h2>
                        // <h3>Menu Price : {it.menu_prise} </h3>
                       
                        // <hr></hr>
                        // </div>
                        <>
                        <tr>
                        <td>{it.menu_name}</td>
                        <td>{it.menu_stock}</td>
                        <td>{it.menu_prise}</td>
                       
                         </tr>
                          <button onClick={()=>{
                            dispatch(addToCart(it))
                        }}>+</button>
                        </>

                    ))
                }
                    
                   
                </tbody>
            </table>
        </section>
        <section class="orders">
            <h2>Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Customer Name</th>
                        <th>Shipping Address</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>ABHISHEK ULAGADDE</td>
                        <td>KADU GALLI</td>
                        <td>coming</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>GAURAV PATIL</td>
                        <td>KADU GALLI</td>
                        <td>coming</td>
                    </tr>
                    <tr>
                        <td>003</td>
                        <td>PARAG PATIL</td>
                        <td>KADU GHAR</td>
                        <td>coming</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section class="reports">
            <h2>Reports</h2>
            <ul>
                <li><a href="#">Item Usage</a></li>
                <li><a href="#">Sales Figures</a></li>
                <li><a href="#">contact Us</a></li>
       
        </ul>
        </section>

        
        
        
        
        



        </>
    )
}


export default Abhimenu