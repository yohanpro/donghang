export const checkNickname = async () => {
  await timeout(1000)
  return true
}

function timeout (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
