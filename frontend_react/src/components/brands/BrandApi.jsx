import { get } from '../../api'

export const fetchAllBrands = async () =>
{
    try
    {
        const res = await get("/brands")
        return res
    } catch (error)
    {
        throw error
    }
}