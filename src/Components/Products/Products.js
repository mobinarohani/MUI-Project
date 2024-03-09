import React ,{useState} from 'react'
import Product from '../Product/Product'

import './ProductStyle.css';

export default function Products() {
    const[products,setProducts]=useState([
        {id:1,title:"airpod",img:"airpod1.webp",price:2_500_000,description:""},
        {id:2,title:"Laptop Asus",img:"laptopasus.webp",price:25_500_000,description:""},
        {id:3,title:"Colpad",img:"laptopcolpad1.webp",price:1_800_000,description:""},
        {id:4,title:"airpod",img:"airpod2.webp",price:1_950_000,description:""},
        {id:5,title:"Colpad",img:"laptopcolpad.webp",price:3_100_000,description:""},
        {id:6,title:"Laptop Hp",img:"laptophp.webp",price:35_000_000,description:""},
        {id:7,title:"Laptop Lenovo",img:"laptoplenovo.jpg",price:27_800_000,description:""},
        {id:8,title:"Mous",img:"mous1.webp",price:350_000,description:""},
        {id:9,title:"Mous",img:"mous2.webp",price:550_000,description:""},
    ])
  return (
    <div className="style-container">
        {products.map(pro=>(
            <Product key={pro.id} {...pro}/>
        ))}
    </div>
  )
}



