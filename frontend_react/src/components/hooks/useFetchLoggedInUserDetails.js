import React, { useEffect } from 'react'
import { selectLoggedInUser } from '../../components/auth/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddressByUserIdAsync } from '../../components/address/AddressSlice'
import { fetchWishlistByUserIdAsync } from '../../components/wishlist/WishlistSlice'
import { fetchCartByUserIdAsync } from '../../components/cart/CartSlice'
import { fetchAllCategoriesAsync } from '../../components/categories/CategoriesSlice'
import { fetchAllBrandsAsync } from '../../components/brands/BrandSlice'
import { fetchUserByIdAsync } from '../../components/user/UserSlice'

export const useFetchLoggedInUserDetails = (deps) =>
{

  const loggedInUser = useSelector(selectLoggedInUser)
  const dispatch = useDispatch();

  useEffect(() =>
  {
    /* when a user is logged in then this dispatches an action to get all the details of loggedInUser, 
    as while login and signup only the bare-minimum information is sent by the server */
    if (deps && loggedInUser?.isVerified)
    {
      dispatch(fetchUserByIdAsync(loggedInUser?._id))
      dispatch(fetchAllBrandsAsync())
      dispatch(fetchAllCategoriesAsync())

      if (!loggedInUser.isAdmin)
      {
        dispatch(fetchCartByUserIdAsync(loggedInUser?._id))
        dispatch(fetchAddressByUserIdAsync(loggedInUser?._id))
        dispatch(fetchWishlistByUserIdAsync(loggedInUser?._id))
      }
    }
  }, [deps])
}
