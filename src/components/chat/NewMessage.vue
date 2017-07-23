<template>
	<div class="pull-left">
	    <button @click="compose = true">
	        <i aria-hidden="true" class="fa fa-plus-square-o">
	        </i>
	        New Message
	    </button>
	    <vodal :show="compose" @hide="compose = false" animation="door">
	    	<form @submit.prevent="submitData">
	    		<h4>Compose new message</h4>
		    	<div class="form-group">
		    		<label>Receiver: </label>
		    		<v-select
						:debounce="250"
						:on-search="getOptions"
						:options="options"
						placeholder="Search Your Friends..."
						label="fullName"
						v-model="receiver"
					>
					</v-select>
		    	</div>
		    	<div class="form-group">
		    		<textarea class="form-control" v-model="newMessage">Type your message</textarea>
		    	</div>
		    	<button type="submit" class="btn btn-success">Send</button>
	    	</form>
	    </vodal>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: null,
				compose:false,
				receiver: null,
				newMessage: '',
			}
		},
		methods: {
		  getOptions(search, loading) {
		    loading(true);
		    axios.get('api/user/friends/search?name=' + search).then(resp => {
		       this.options = resp.data.data;
		       loading(false);
		    })
		  },
		submitData(){
			this.$emit('conversationcreated', {receiver: this.receiver, body: this.newMessage});
		}
		},
	}
</script>