module.exports = {
  getJWT: () => {
    const jwtToken = localStorage.getItem("ARROW_JWT_TOKEN");
    return jwtToken;
  },
  getJWTConfig: () => {
    const jwtToken = localStorage.getItem("ARROW_JWT_TOKEN");
    const config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
    return config;
  },
};
