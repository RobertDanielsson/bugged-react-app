export const getFullName = (user) => {
  return `${user.firstname ?? "☠️"} ${user.lastName}`;
};

export const getTotalAge = (users) => {
  if (!users.length) return 0;
  return users.reduce((total, user) => total + user.age, 0);
};

export const getTotalRegistered = (users) => {
  return users.length;
};
