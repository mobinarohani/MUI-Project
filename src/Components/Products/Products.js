import React ,{useState} from 'react'
import Product from '../Product/Product'


import './ProductStyle.css';

export default function Products() {
    const[products,setProducts]=useState([
        {id:1,title:"airpod",img:"airpod1.webp",price:2_500_000,description:"Bluetooth handsfree Airpod 3 model"},
        {id:2,title:"Laptop Asus",img:"laptopasus.webp",price:25_500_000,description:"15.6 inch Asus Vivobook Go 15 E510KA-BR395W-Celeron N4500 4GB 256SSD laptop"},
        {id:3,title:"Colpad",img:"laptopcolpad1.webp",price:1_800_000,description:"Tesco TCLP 3100 cooling base"},
        {id:4,title:"airpod",img:"airpod2.webp",price:1_950_000,description:"Bluetooth hands-free AirPod 2 Black model"},
        {id:5,title:"Colpad",img:"laptopcolpad.webp",price:3_100_000,description:"Deep Cool Multi Core X6 cooling base"},
        {id:6,title:"Laptop Hp",img:"laptophp.webp",price:35_000_000,description:"15.6 inch HP G9 255 5Y3X4EA-R3 5425U 4GB 1HDD laptop"},
        {id:7,title:"Laptop Lenovo",img:"laptoplenovo.jpg",price:27_800_000,description:"15.6 inch Lenovo V15 G2 IJL-Celeron N4500 4GB 256SSD laptop"},
        {id:8,title:"Mous",img:"mous1.webp",price:350_000,description:"Hiska mouse model HX-MOG330"},
        {id:9,title:"Mous",img:"mous2.webp",price:550_000,description:"Bloody ES5 Esports RGB Gaming Mouse model"},
    ])

    const[cart,setCart]=useState([])

    const handlecartproducts=(id)=>{
        let item=products.find(pro=>pro.id===id)

        setCart(prev=>{
          return[...prev,item]
        })
        console.log(item);
    }
  return (
    <div className="style-container">
        {products.map(pro=>(
            <Product key={pro.id} {...pro} addproduct={handlecartproducts}/>
        ))}
    </div>
  )
}



