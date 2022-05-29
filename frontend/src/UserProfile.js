const UserProfile = (function () {
    let user

    const getUserInfo = () => {
        return user
    };

    const setUserInfo = data => {
        user = data;
    };

    return {
        getUserInfo: getUserInfo,
        setUserInfo: setUserInfo
    }

})();

export default UserProfile;