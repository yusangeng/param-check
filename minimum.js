/**
 * 导出入口(不注册任何validator)
 * @author Y3G
 */

var validate = require('./lib/validate');

validate.default = validate;
module.exports = validate;
