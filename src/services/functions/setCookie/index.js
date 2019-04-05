/**
 * @func setCookie
 */

export const setCookie = (cookieName, cookieBody) => {
  const cookieLiveHours = 1
  const date = new Date()

  date.setHours(date.getHours() + cookieLiveHours)

  document.cookie = `${cookieName}=${cookieBody}; path=/; expires="${date.toUTCString()}`
}

export default setCookie
