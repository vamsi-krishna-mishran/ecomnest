import { configureStore } from "@reduxjs/toolkit";
import UserSlice from '../components/user/UserSlice'
import AuthSlice from '../components/auth/AuthSlice'
import ProductSlice from '../components/products/ProductSlice'
import BrandSlice from '../components/brands/BrandSlice'
import CategoriesSlice from '../components/categories/CategoriesSlice'
import CartSlice from '../components/cart/CartSlice'
import AddressSlice from '../components/address/AddressSlice'
import ReviewSlice from '../components/review/ReviewSlice'
import OrderSlice from '../components/order/OrderSlice'
import WishlistSlice from '../components/wishlist/WishlistSlice'

export const store = configureStore({
    reducer: {
        UserSlice,
        ProductSlice,
        BrandSlice,
        CategoriesSlice,
        CartSlice,
        AddressSlice,
        ReviewSlice,
        OrderSlice,
        WishlistSlice,
        AuthSlice
    }
})