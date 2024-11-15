import { get, post, post_getheader, remove, update } from '../../api'

export const signup = async (userinfo) =>
{
    try
    {
        const res = await post('auth/signup', userinfo);
        return res;
    }
    catch (err)
    {
        throw err;
    }
}

export const login = async (userinfo) =>
{
    try
    {
        const res = await post_getheader('auth/login', userinfo);
        // console.log(res.headers.authorization)
        try
        {
            localStorage.setItem('ecomtoken', res.headers["authorization"]);

        }
        catch (err)
        {
            console.error('token setting to l.storage failed.');
            console.error(err)
        }
        return res.data;
    }
    catch (err)
    {
        throw err;
    }
}

export const verifyOtp = async (cred) =>
{

    const res = await post('auth/verify-otp', cred);
    return res;

}

export const resendOtp = async (cred) =>
{
    const res = await post('auth/resend-otp', cred);
    return res;
}

export const forgotPassword = async (userinfo) =>
{
    const res = await post('auth/forgot-password', userinfo);
    return res;
}

export const resetPassword = async (userinfo) =>
{
    const res = await post('auth/reset-password', userinfo);
    return res;
}

export const checkAuth = async (userinfo) =>
{
    const res = await get('auth/check-auth', userinfo);
    return res;
}

export const logout = async () =>
{
    try
    {
        localStorage.removeItem('ecomtoken');

    }
    catch (err)
    {
        console.log(err);
    }
    const res = await get('auth/logout');
    return res;

}