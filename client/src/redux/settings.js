export const getConfig = (state) => {
  const {
    login: { user_login },
  } = state.users;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user_login.token}`,
    },
  };

  return config;
};
