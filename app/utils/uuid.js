const uuid = require('uuid')

const getUUid = ()=> {
  return uuid.v4().replace(/-/g,'')
}
module.exports = getUUid;
