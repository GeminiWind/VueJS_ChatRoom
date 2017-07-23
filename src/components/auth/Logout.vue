<template>
	
</template>

<script>
	export default{
		created(){
			this.logout();
		},
		methods: {
			logout(){
				this.$auth.destroyToken();
				this.$router.push({ path: '/'});
			}
		}
	}
</script>