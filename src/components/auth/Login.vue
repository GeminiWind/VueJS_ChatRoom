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
                                <input class="form-control" name="email" placeholder="E-mail" type="text" v-validate="'required|email'" v-model=email>
                                </input>
                                <div v-show="errors.has('email')" class="alert alert-danger">{{ errors.first('email') }}</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" name="password" placeholder="Password" type="password" value="" v-validate="'required|min:6'"v-model=password>
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
import { mapState } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: mapState({
    error: (state) => state.auth.error,
    isAuthenticating: (state) => state.auth.isAuthenticating
  }),
  methods: {
    login () {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        if (this.isAuthenticating) {
          return
        }
        this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password
        }).then(() => {
          this.$router.push({ path: '/feed' })
        })
      }
    }
  }
}
</script>

<style scoped>
  body{padding-top:20px;}
</style>