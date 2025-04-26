const dbCon = require("./connection");

module.exports = async () => {
  try {
    const queryget = new Promise((resolve, reject) => {
      dbCon.query("SELECT * FROM course", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    const result = await queryget;
    return result;
  } catch (error) {
    throw error;
  }
};
