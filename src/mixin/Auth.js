import { mapState } from 'vuex'
export default {
  computed: mapState({
    user: (state) => state.auth.profile
  }),
  created () {
    if (this.$store.getters['auth/isAuthenticated'] && this.$store.state.auth.profile == null) {
      this.$store.dispatch('auth/getProfile').catch(err => {
        if (err.response.status < 400 || err.response.status >= 500) {
          return
        }
        this.$store.dispatch('auth/logout').then(() => {
          this.$router.push({ path: '/' })
        })
      })
    }
  }
}
