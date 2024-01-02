import STORAGEKEY from "./app.config";

class Auth {


    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static setAuthToken(token) {
        return localStorage.setItem(STORAGEKEY.token, token);
    }

    static setJsonStorageData(key, data) {
        return localStorage.setItem(key, JSON.stringify(data));
    }

    static setStorageData(key, data) {
        return localStorage.setItem(key, data);
    }

    static getJsonStorageData(key) {
        const data = localStorage.getItem(key)
        return JSON.parse(data)
    }

    static getStorageData(key) {
        localStorage.getItem(key);
    }

    static deleteItem(key) {
        localStorage.removeItem(key);
    }

    /**
     * Get a token value.
     *
     * @returns {string}
     */
    static getToken() {
        return localStorage.getItem(STORAGEKEY.token);
    }

    static isUserAuthenticated() {
        return (
            localStorage.getItem(STORAGEKEY.token) !== null ||
            sessionStorage.getItem(STORAGEKEY.token) !== null
        );
    }

    static deAuthenticateUser() {
        localStorage.removeItem(STORAGEKEY.token)
        localStorage.removeItem(STORAGEKEY.userId)
        localStorage.removeItem(STORAGEKEY.userData)

        sessionStorage.removeItem(STORAGEKEY.token)
        sessionStorage.removeItem(STORAGEKEY.userId)
        sessionStorage.removeItem(STORAGEKEY.userData)
    }



    static GetIsAccessData(formtype, view_type) {
        let data = Auth.getJsonStorageData(STORAGEKEY.userData)
        if (data) {
            if (data.is_main) {
                return true;
            } else if (data.license?.[0]?.is_expiry && view_type !== "is_view") {
                return false
            } else {
                let formData = data.userRole ? data.userRole.userRoleFrom : [];
                let selectedData = formData.filter((x) => x.name === formtype)?.[0];
                return selectedData[view_type];
            }
        } else {
            return false
        }
    }

    static GetMainIsAccessData(formtype, view_type) {
        let data = Auth.getJsonStorageData(STORAGEKEY.userData)
        if (data) {
            if (data.is_main) {
                return true;
            } else {
                let formData = data.userRole ? data.userRole.userRoleFrom : [];
                let selectedData = formData.filter((x) => x.selection_second === formtype && x.is_view === true);

                return selectedData.length > 0 ? true : false;
            }
        } else {
            return false
        }
    }
}

export default Auth;



// export const loginAction = (LogInData) => {
//     return (dispatch) => {
//         dispatch({
//             type: IS_LOADING,
//             payload: true,
//         });
//         dispatch({
//             type: ADD_LOGIN_LOADING,
//             payload: true,
//         });
//         return ApiPostNoAuth(`/api/login`, LogInData)
//             .then((res) => {
//                 console.log("res::::", res);
//                 auth.setAuthToken(res.data.token);
//                 let data = res.data;
//                 delete data.password;
//                 dispatchLoginActions(dispatch, {
//                     loading: false,
//                     success: res.data,
//                 });
//                 toast.success(res?.message, { autoClose: 1000, })
//                 window.location.href = "/PropertyCard";
//             })
//             .catch((error) => {
//                 console.log("res::::", error);

//                 dispatchLoginActions(dispatch, {
//                     loading: false,
//                     error: error,
//                 });
//                 toast.error(error?.message, { autoClose: 1000, })
//             });
//     };
// };