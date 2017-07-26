export default {
  computed: {
    user () {
      return this.$store.getters['auth/user']
    }
  },
  created () {
    this.$store.dispatch('auth/getUser')
  }
}
