const getRequiredFields = (errors) =>
  Object.keys(errors).reduce(
    (acc, k) => ({ ...acc, [k]: 'Обязательное поле' }),
    {}
  );

module.exports = {
  getRequiredFields,
};
