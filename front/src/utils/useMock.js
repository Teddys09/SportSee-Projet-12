/**
 * Fetch data from an API Using Axios
 * @param {String} url
 * @returns {Object} data
 */
const useMock = () => {
  // http://localhost:3000/user/12
  let data = {
    data: {
      id: 12,
      userInfos: {
        firstName: 'Karl',
        lastName: 'Dovineau',
        age: 31,
      },
      todayScore: 0.12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    },
  };

  return data;
};

export default useMock;
