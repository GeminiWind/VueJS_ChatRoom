import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({ user: 'auth/user' }),
  beforeCreate () {
    this.$store.dispatch('auth/getUser')
  }
}
