export const emailValidation = (email) => {
  let pattern = new RegExp(/^\w+([-+.']\w+)*@([\w-]+\.)+[\w-]{2,4}$/)
  if (pattern.test(email.trim())) return true
  else return false
}
