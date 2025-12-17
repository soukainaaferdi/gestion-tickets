
export const calculateHours = (createdAt) => {
  const now = new Date();
  const created = new Date(createdAt);
  const diff = (now - created) / (1000 * 60 * 60);
  return diff < 0 ? 0 : Math.floor(diff); 
};

