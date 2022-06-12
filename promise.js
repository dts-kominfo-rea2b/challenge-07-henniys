const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (anger) => {
  return Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    .then((response) => {
      const [ixx, vgc] = response;
      return [...ixx, ...vgc].filter((item) => item.hasil === anger).length;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  promiseOutput,
};
