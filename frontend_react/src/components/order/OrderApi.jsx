import { post, get, update } from '../../api'


export const createOrder = async (order) =>
{
    const res = await post("/orders", order)
    return res
}

export const getOrderByUserId = async (id) =>
{
    const res = await get(`/orders/user/${id}`)
    return res
}

export const getAllOrders = async () =>
{
    const res = await get(`/orders`)
    return res
}

export const updateOrderById = async (updated) =>
{
    const res = await update(`/orders/${updated._id}`, updated)
    return res
}