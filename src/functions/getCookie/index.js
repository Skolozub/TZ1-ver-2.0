/**
 * @func getCookie
 */

const getCookie = cookieName => {
  const results = document.cookie.match(`(^|;) ?${cookieName}=([^;]*)(;|$)`)

  if (results) {
    return unescape(results[2])
  }
}

export default getCookie
