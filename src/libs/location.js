/* eslint-disable */
const SESSION_KEY = 'token'
// 本地存储 sessionStorage
const sessionStorage = window.sessionStorage
export const session = {
  getItem: function (key) {
    return sessionStorage.getItem(key)
  },
  setItem: function (key, value) {
    sessionStorage.setItem(key, value)
  },
  remove: function (key) {
    if (sessionStorage.getItem(key)) {
      sessionStorage.removeItem(key)
    }
  },
  clear: function () {
    sessionStorage.clear()
  },
  parseJSON: function () {
    return sessionStorage.getItem(SESSION_KEY) === 'undefined' ? null : JSON.parse(sessionStorage.getItem(SESSION_KEY))
  },
  setObject: function (object) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(object))
  },
  get: function (key) {
    let initParams = JSON.parse(sessionStorage.getItem(SESSION_KEY))
    return initParams[key] || ''
  },
  set: function (key, value) {
    let initParams = JSON.parse(sessionStorage.getItem(SESSION_KEY))
    initParams[key] = value
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(initParams))
  },
  cut: function (key) {
    let initParams = JSON.parse(sessionStorage.getItem(SESSION_KEY))
    delete initParams[key]
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(initParams))
  }
}

// 本地存储 localStorage
const localStorage = window.localStorage
export const local = {
  getItem: function (key) {
    return localStorage.getItem(key)
  },
  setItem: function (key, value) {
    localStorage.setItem(key, value)
  },
  removeItem: function (key) {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key)
    }
  },
  clear: function () {
    localStorage.clear()
  }
}
