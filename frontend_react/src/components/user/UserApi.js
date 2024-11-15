import { get, post, remove, update } from '../../api'


export const fetchUserById = async (id) =>
{
    try
    {
        const user = await get(`/users/${id}`)
        return user
    }
    catch (err)
    {
        throw err.response.data
    }
}

export const updateUserById = async (user) =>
{
    try
    {
        const result = await update(`/users/${user._id}`, user)
        return result
    }
    catch (err)
    {
        throw err.response.data;
    }
}