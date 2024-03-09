import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './Product.css'

export default function Product(props) {
  return (
    <Card sx={{ maxWidth: 310 }}>
      <div style={{height:"340px"}}>
        <CardMedia
        sx={{ height: "100%" ,width:"100%"}}
        image={props.img}
        title="img"
      />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         {props.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

