<template lang="html">
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Please sign in
                    </h3>
                </div>
                <div class="panel-body">
                    <form @submit.prevent="login">
                        <fieldset>
                            <div class="form-group">
                                <input class="form-control" name="email" placeholder="E-mail" type="text" v-validate="'required|email'" v-model=user.email>
                                </input>
                                <div v-show="errors.has('email')" class="alert alert-danger">{{ errors.first('email') }}</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" name="password" placeholder="Password" type="password" value="" v-validate="'required|min:6'"v-model=user.password>
                                </input>
                                 <div v-show="errors.has('password')" class="alert alert-danger">{{ errors.first('password') }}</div>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input name="remember" type="checkbox" value="Remember Me">
                                        Remember Me
                                    </input>
                                </label>
                            </div>
                            <input class="btn btn-lg btn-primary btn-block" type="submit" value="Login">
                            </input>
                        </fieldset>
                    </form>
                    <div>
	                    <router-link :to="{ path: '/register' }" class="pull-left">Create New Account</router-link>
	                    <router-link :to="{ path: '/forget' }" class="pull-right">Forget Password</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    login () {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        axios.post('/login', {email: this.user.email, password: this.user.password}).then(response => {
          if (response.data.error == null) {
            this.$auth.setToken(response.data.data.token, response.data.data.expiration * 1000 + Date.now())
            this.$router.push({ path: '/feed'})
          } else {
            swal({
              title: 'Whoops!',
              text: response.data.error,
              type: 'error',
              confirmButtonText: 'OK'
            })
          }
        }).catch(function (error) {
          swal({
            title: 'Whoops!',
            text: 'Look like something went wrongs!! Try again',
            type: 'error',
            confirmButtonText: 'OK'
          })
        })
      }
    }
  }

}
</script>

<style scoped>
body{padding-top:20px;}
</style>