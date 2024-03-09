import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(sessionStorage.getItem("cart")) || [],
    amount: JSON.parse(sessionStorage.getItem("amount")) || 0,
    totalAmount: JSON.parse(sessionStorage.getItem("totalAmount")) || 0,
    totalPrice: JSON.parse(sessionStorage.getItem("totalPrice")) || 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            size: productId.size,
            amount: 1,
            img: productId.img,
            totalPrice: productId.price,
            name: productId.name,
            text: productId.text,
            color: productId.color,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (err) {
        return err;
      }
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
      sessionStorage.setItem("amount", JSON.stringify(state.amount));
      sessionStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      sessionStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
      } catch (err) {
        return err;
      }
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
      sessionStorage.setItem("amount", JSON.stringify(state.amount));
      sessionStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      sessionStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    resetCart: (state) => {
      state.cart = [];
      state.amount= 0;
      state.totalAmount= 0;
      state.totalPrice= 0;
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
      sessionStorage.setItem("amount", JSON.stringify(state.amount));
      sessionStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      sessionStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
