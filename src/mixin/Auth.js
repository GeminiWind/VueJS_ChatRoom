export default {
    computed: {
        user() {
            return this.$store.getters['auth/user'];
        }
    },
    beforeCreate() {
        this.$store.dispatch('auth/getUser');
    },
}