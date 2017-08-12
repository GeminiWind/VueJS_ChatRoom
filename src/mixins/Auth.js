export default {
  beforeCreate () {
    if (this.$store.getters['auth/isAuthenticated']) {
      window.axios.defaults.headers.common['Authorization'] = this.$store.state.auth.token
    }
  }
}
