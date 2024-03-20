import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import "./Product.css";

export default function Product(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "4px solid #E1AFD1",
    boxShadow: 24,
    borderRadius: "1rem",
  };

  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "4px solid #7469B6",
    boxShadow: 24,
    borderRadius: "1rem",
  };

  const style3 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    textAlign: "center",
  };

  const [open, setOpen] = React.useState(false);
  const [openchild, setOpenchild] = React.useState(false);
  const [openCircul, setOpenCircul] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlechild = () => {
    setOpen(false);
    setOpenCircul(true);
    setTimeout(()=>{
        setOpenCircul(false);
        setOpenchild(true);
        props.addproduct(props.id)
    },3000)
  };

  const handleClosechild = () => setOpenchild(false);

  // const handleCloseCircul = () => {
  //   setOpenCircul(false);
  // };

  return (
    <>
      <Card sx={{ minWidth: 310, maxWidth: 310 }} className="card-style-flex">
        <div style={{ height: "340px" }}>
          <CardMedia
            sx={{ height: "100%", width: "100%" }}
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
            {props.description}
          </Typography>
        </CardContent>
        <CardActions className="card-style-containerBTN">
          <Button
            className="product-style-btn"
            onClick={handleOpen}
            size="small"
          >
            Buy
          </Button>
          <Button className="product-style-btn" size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-style-container">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cart
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="modal-style-description"
          >
            Do you want to add this product to your shopping cart?
          </Typography>
          <Typography variant="h4" gutterBottom className="modal-style-btn">
            <Button
              className="product-style-btn"
              onClick={handlechild}
              size="small"
            >
              Yes
            </Button>
            <Button
              className="product-style-btn"
              onClick={handleClose}
              size="small"
            >
              No
            </Button>
          </Typography>
        </Box>
      </Modal>

      {openCircul ? (
        <Modal
        open={openCircul}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style3}>
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openCircul}
          ></Backdrop>
        <CircularProgress color="inherit" style={{margin:"20rem auto"}}/>
        </Box>
      </Modal>
      ) : (
        <Modal
          open={openchild}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style2} className="modal-style-container">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Cart
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              className="modal-style-description"
            >
              This product has been added to your shopping cart.
            </Typography>
            <Typography variant="h4" gutterBottom className="modal-style-btn">
              <Button
                className="product-style-btn"
                onClick={handleClosechild}
                size="small"
              >
                ok
              </Button>
            </Typography>
          </Box>
        </Modal>
      )}
    </>
  );
}
