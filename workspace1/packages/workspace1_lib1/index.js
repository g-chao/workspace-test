const workspace2_lib1 = require("workspace2_lib1");
workspace2_lib1.workspace2_lib1();
console.log('workspace1_lib1: ' + require.resolve('react'));
exports.workspace1_lib1 = function () {
  return 'workspace1_lib1'
};