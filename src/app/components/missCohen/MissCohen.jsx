import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import Box from "@mui/system/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import missCohenLogo from "../../assets/images/miss-cohen-logo.png";
import hummus from "../../assets/images/hummus.jpg";
import shakshuka from "../../assets/images/shakshuka.jpg";
import "./styles/styles.css";

const MissCohen = () => {
  const [cart, setCart] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    if (cart.length) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCheckout = ()=>{
    setCart([]);
    setAnchorEl(null)
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={() => setAnchorEl(null)}
    >
      {cart.length && (
        <MenuItem>
          <a
          style={{textDecoration:'none', color:'black'}}
            onClick={handleCheckout}
            href={cart[cart.length-1] === "Hummus" ? "http://miss-cohen.herokuapp.com/" : "https://github.com/nadavkatan/miss-cohen"}
            target="_blank"
            rel="noreferrer"
          >
            Checkout
          </a>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <Paper elevation={3} className="miss-cohen-project-card">
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <IconButton
          sx={{ margin: "-1em 1em 0 0" }}
          onClick={(event) => handleMenuOpen(event)}
        >
          {cart.length ? (
            <Badge badgeContent={cart.length} color="warning">
              <ShoppingBasketIcon color="primary" />
            </Badge>
          ) : (
            <ShoppingBasketIcon color="primary" />
          )}
        </IconButton>
      </Box>

      <img
        className="miss-cohen-logo"
        src={missCohenLogo}
        alt="miss-cohen-logo"
      />
      <Grid container spacing={2} className="miss-cohen-cards-container">
        <Grid item xs={6} className="miss-cohen-card">
          <img src={hummus} alt="hummus dish" className="miss-cohen-dish" />
          <Typography
            variant="subtitle2"
            color="white"
            className="miss-cohen-card-text"
          >
            Hummus: €7
          </Typography>
          <Button
            variant="contained"
            className="miss-cohen-add-btn"
            onClick={() => setCart((prev) => [...prev, "Hummus"])}
          >
            Add to cart
          </Button>
        </Grid>
        <Grid item xs={6} className="miss-cohen-card">
          <img
            src={shakshuka}
            alt="shakshuka dish"
            className="miss-cohen-dish"
          />
          <Typography
            variant="subtitle2"
            color="white"
            className="miss-cohen-card-text"
          >
            Shakshuka: €10
          </Typography>
          <Button
            variant="contained"
            className="miss-cohen-add-btn"
            onClick={() => setCart((prev) => [...prev, "Shakshuka"])}
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
      {renderMenu}
    </Paper>
  );
};

export default MissCohen;
