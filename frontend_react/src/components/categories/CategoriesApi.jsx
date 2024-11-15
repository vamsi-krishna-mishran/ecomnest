import { get } from '../../api'
export const fetchAllCategories = async () =>
{
    const res = await get("/categories")
    return res
}