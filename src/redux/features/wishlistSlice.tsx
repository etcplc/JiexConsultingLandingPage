import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { ShopItem } from "@/types";

interface WishlistState {
  wishlist: ShopItem[];
}

const initialState: WishlistState = {
  wishlist: [
    {
      id: 9,
      img: "/assets/img/rv-inner-product-9.png",
      hoverImg: "/assets/img/rv-inner-pro-hover-img-1.jpg",
      name: "Compact Powder",
      slug: "compact-powder",
      price: 250,
      prevPrice: 320,
      discount: true,
      popularity: 11,
      rating: 4.5,
      quantity: 1,
      category: "VARIABLE",
      color: "CORAL RED",
    },
    {
      id: 10,
      img: "/assets/img/rv-inner-product-10.png",
      hoverImg: "/assets/img/rv-inner-pro-hover-img-2.jpg",
      name: "Lip Gloss",
      slug: "lip-gloss",
      price: 450,
      prevPrice: 480,
      popularity: 5,
      rating: 2,
      quantity: 1,
      category: "VAMP",
      color: "GRAPHITE BROWN",
    },
    {
      id: 11,
      img: "/assets/img/rv-inner-product-11.png",
      hoverImg: "/assets/img/rv-inner-pro-hover-img-3.jpg",
      name: "Makeup Remover",
      slug: "makeup-remover",
      price: 350,
      prevPrice: 370,
      discount: true,
      popularity: 21,
      rating: 4,
      quantity: 1,
      category: "MUST HAVE",
      color: "DEEP MULBERRY",
    },
  ],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ShopItem>) => {
      const existingItemIndex = state.wishlist.findIndex(
        (wishlistItem) => wishlistItem.id === action.payload.id
      );

      if (existingItemIndex === -1) {
        // Item doesn't exist in the wishlist, add it
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      // Remove item from wishlist by id
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    moveAllToCart: (state) => {
      // Clear wishlist
      state.wishlist = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, moveAllToCart } =
  wishlistSlice.actions;

export const selectWishlistState = (state: RootState) => state.wishlist;

export default wishlistSlice.reducer;
