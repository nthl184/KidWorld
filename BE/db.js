const oracledb = require('oracledb');

const dbConfig = {
  user: 'kidworld',       
  password: '123456',   
  connectString: '192.168.130.1:1521/ORCLPDB1' // kết nối Oracle local
};

async function openConnection() {
  return await oracledb.getConnection(dbConfig);
}

module.exports = { openConnection };
