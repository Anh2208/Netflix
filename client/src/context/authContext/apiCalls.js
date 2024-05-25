import axios from "axios"
import { loginStart, loginSuccess, loginFailure } from "./AuthActions.js"
import { toast } from "react-toastify";

export const login = async (user, dispatch) => {
    dispatch(loginStart);
    try {
        const res = await axios.post("http://localhost:8800/api/auth/login", user, {
            withCredentials: true
        });
        dispatch(loginSuccess(res.data));

        // alert(document.cookie);

        toast.success(`Đăng nhập thành công`, {
            autoClose: 1500,
        });
    } catch (error) {
        dispatch(loginFailure())

    }
}
