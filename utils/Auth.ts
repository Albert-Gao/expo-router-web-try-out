export const Auth = {
  login() {
    localStorage.setItem("auth", "true");
  },

  logout() {
    localStorage.clear();
  },

  isAuth() {
    const value = localStorage.getItem("auth");
    return value === "true";
  },
};
