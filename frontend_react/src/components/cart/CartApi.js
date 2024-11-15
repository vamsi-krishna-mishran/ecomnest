import { post, get, update, remove } from '../../api';

export const addToCart = async (item) =>
{
    const result = await post('/cart/', item);
    return result
}

export const fetchCartByUserId = async (userId) =>
{
    const result = await get(`/cart/user/${userId}`)
    return result
}

export const updateCartItemById = async (updated) =>
{
    const res = await update(`/cart/${updated._id}`, updated)
    return res
}
export const deleteCartItemById = async (id) =>
{
    const res = await remove(`/cart/${id}`)
    return res
}

export const resetCartByUserId = async (userId) =>
{
    const res = await remove(`/cart/user/${userId}`)
    return res
}