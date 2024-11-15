import { API } from "./base";

export const get = async (endpoint) =>
{
    try
    {
        const result = await API.get(endpoint);
        return result.data;
    }
    catch (err)
    {
        console.error(err);
        throw err.response.data;
    }
}
export const post = async (endpoint, data) =>
{
    try
    {
        const result = await API.post(endpoint, data);
        return result.data;
    }
    catch (err)
    {
        console.error(err);
        throw err.response.data;
    }
}
export const post_getheader = async (endpoint, data) =>
{
    try
    {
        const result = await API.post(endpoint, data);

        const result2 = { data: result.data, headers: result.headers };
        //console.log(result2);
        return result2;
    }
    catch (err)
    {
        console.error(err);
        throw err.response.data;
    }
}

export const remove = async (endpoint, data) =>
{
    try
    {
        const result = await API.delete(endpoint, data);
        return result.data;
    }
    catch (err)
    {
        console.error(err);
        throw err.response.data;
    }
}
export const update = async (endpoint, data) =>
{
    try
    {
        const result = await API.patch(endpoint, data);
        return result.data;
    }
    catch (err)
    {
        console.error(err);
        throw err.response.data;
    }
}
