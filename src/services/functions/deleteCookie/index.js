/**
 * @func deleteCookie
 */

const deleteCookie = cookieName => {
  const date = new Date()
  date.setTime(date.getTime() - 1)

  const cookieExpires = date.toGMTString()
  document.cookie = `${cookieName}=; path=/; expires=${cookieExpires}`
}

export default deleteCookie
