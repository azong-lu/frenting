/* eslint-disable */
const now = +new Date();
let uindex = 0;

const uid = function() {
  return 'lurongzong-' + now + '-' + ++uindex;
};

export default uid;
