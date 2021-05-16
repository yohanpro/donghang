export default async function ({ store, redirect }) {
  console.log('middleware 작동')
  const { isAuthenticated, token } = store.state.auth
  let result
  if (!isAuthenticated) {
    try {
      result = await store.dispatch('auth/refreshToken', token)
    } catch (err) {
      redirect('/auth/login')
    }
    if (!result) { redirect('/auth/login') }
  }
}
