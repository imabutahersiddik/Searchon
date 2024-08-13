export default defineEventHandler(async (event) => {
  const { q, pageSize } = getQuery(event);
  const { data } = await $fetch('/everything', {
    method: 'GET',
    params: {
      q,
      pageSize
    }
  });
  return data;
});
