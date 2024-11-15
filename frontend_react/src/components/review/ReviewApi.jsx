import { post, get, remove, update } from '../../api'
export const createReview = async (review) =>
{
    const res = await post('/reviews', review)
    return res
}
export const fetchReviewsByProductId = async (id) =>
{
    const res = await get(`/reviews/product/${id}`)
    return res
}

export const updateReviewById = async (updated) =>
{
    const res = await update(`/reviews/${updated._id}`, updated)
    return res
}
export const deleteReviewById = async (id) =>
{
    const res = await remove(`/reviews/${id}`)
    return res
}