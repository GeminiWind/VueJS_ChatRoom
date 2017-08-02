<template>

</template>

<script>
export default{
  created () {
    this.logout()
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>