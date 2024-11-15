import { get, post, update, remove } from '../../api'

export const createWishlistItem = async (data) =>
{
    const res = await post("/wishlist", data)
    return res
}

export const fetchWishlistByUserId = async (id) =>
{
    const res = await get(`/wishlist/user/${id}`)
    //const totalResults = await res.headers.get("X-Total-Count")
    return { data: res, totalResults: 0 }
}

export const updateWishlistItemById = async (updated) =>
{
    const res = await update(`/wishlist/${updated._id}`, updated)
    return res
}

export const deleteWishlistItemById = async (id) =>
{
    const res = await remove(`/wishlist/${id}`)
    return res
}