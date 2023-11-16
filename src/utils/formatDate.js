export const formatDate = (createdAt) => {
  const date = createdAt.split('T')[0].split('-').join('.');
  return date;
};
