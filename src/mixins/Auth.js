export default {
  beforeCreate () {
    if (this.$store.getters['auth/isAuthenticated']) {
      this.$http.defaults.headers.common['Authorization'] = this.$store.state.auth.token
    }
  }
}
