const success = (data, msg = 'success request') => {
  return {
    code: 200,
    data,
    msg,
  }
}

const error = (code = 500, data = null, msg = 'error request') => {
  return {
    code,
    data,
    msg,
  }
}

module.exports = {
  success,
  error,
}
