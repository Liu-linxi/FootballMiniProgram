export function countdownFu(fn, params, duration = 1500) {
  return setTimeout(() => {
    fn(params)
  }, duration)
}

export function jsonObj(str) {
  try {
    return JSON.parse(str)
  } catch (e) {
    showToast('请传入可解析的json字符')
  }
}

export function jsonStr(obj) {
  try {
    return JSON.stringify(obj)
  } catch (e) {
    showToast('请传入可转化的json数据')
  }
}

export function encryPhone(phone) {
  return String(phone).replace(/(\d{3})\d{4}(\d{4})/g, '$1****$2')
}

export function formatGender(gender) {
  return {
    1: '男',
    2: '女',
    0: '未知',
  }[gender]
}

export function catchAwait(promise) {
  return promise.then(
    (data) => [null, data],
    (err) => [err, null]
  )
}
