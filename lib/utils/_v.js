/**
 * 内部断言
 * @author Y3G
 */

'use strict'

module.exports = _v

function _v (expr, message) {
  if (!expr) {
    console.error('[IO-VALIDATE-INTERNAL] ' + message)
  }

  return !!expr
}
