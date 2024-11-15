import { post, get, remove, update } from '../../api'

export const addAddress = async (address) =>
{
    const res = await post("/address", address)
    return res
}
export const fetchAddressByUserId = async (id) =>
{
    const res = await get(`/address/user/${id}`)
    return res
}
export const updateAddressById = async (updated) =>
{
    const res = await update(`/address/${updated._id}`, updated)
    return res
}
export const deleteAddressById = async (id) =>
{
    const res = await remove(`/address/${id}`)
    return res
}