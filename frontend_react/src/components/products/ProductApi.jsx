import { post, get, remove, update } from '../../api'
export const addProduct = async (data) =>
{
    const res = await post('/products', data)
    return res
}
export const fetchProducts = async (filters) =>
{

    let queryString = ''

    if (filters.brand)
    {
        filters.brand.map((brand) =>
        {
            queryString += `brand=${brand}&`
        })
    }
    if (filters.category)
    {
        filters.category.map((category) =>
        {
            queryString += `category=${category}&`
        })
    }

    if (filters.pagination)
    {
        queryString += `page=${filters.pagination.page}&limit=${filters.pagination.limit}&`
    }

    if (filters.sort)
    {
        queryString += `sort=${filters.sort.sort}&order=${filters.sort.order}&`
    }

    if (filters.user)
    {
        queryString += `user=${filters.user}&`
    }

    const res = await get(`/products?${queryString}`)
    //const totalResults = await res.headers.get("X-Total-Count")
    return { data: res, totalResults: 0 }
}
export const fetchProductById = async (id) =>
{
    const res = await get(`/products/${id}`)
    return res
}
export const updateProductById = async (updated) =>
{
    const res = await update(`/products/${updated._id}`, updated)
    return res
}
export const undeleteProductById = async (id) =>
{
    const res = await update(`/products/undelete/${id}`)
    return res
}
export const deleteProductById = async (id) =>
{
    const res = await remove(`/products/${id}`)
    return res
}
