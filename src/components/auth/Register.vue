<template lang="html">
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Register A New Account
                    </h3>
                </div>
                <div class="panel-body">
                    <form @submit.prevent="register">
                        <fieldset>
                           	<div class="form-group">
                               <input class="form-control" name="firstName" placeholder="Your First Name" type="text" v-model=user.firstName v-validate="'required'">
                                </input>
                                 <div v-show="errors.has('firstName')" class="alert alert-danger">{{ errors.first('firstName') }}</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" name="lastName" placeholder="Your Last Name" type="text" v-model=user.lastName v-validate="'required'">
                                </input>
                                 <div v-show="errors.has('lastName')" class="alert alert-danger">{{ errors.first('lastName') }}</div>
                            </div>	
                            <div class="form-group">
                                <input class="form-control" name="email" placeholder="Your E-mail" type="text" v-model=user.email v-validate="'required|email'">
                                </input>
                                 <div v-show="errors.has('email')" class="alert alert-danger">{{ errors.first('email') }}</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" name="password" placeholder="Password at least 6 characters" type="password" value="" v-model=user.password v-validate="'required|min:6'">
                                </input>
                                 <div v-show="errors.has('password')" class="alert alert-danger">{{ errors.first('password') }}</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" name="password_confirmed" placeholder="Re-enter password" type="password" value="" v-validate="'required|confirmed:password'">
                                </input>
                                 <div v-show="errors.has('password_confirmed')" class="alert alert-danger">{{ errors.first('password_confirmed') }}</div>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input name="gender" type="radio" value="Male" v-model=user.gender checked>
                                        Male
                                    </input>
                                </label>
                                <label>
                                    <input name="gender" type="radio" value="Female" v-model=user.gender>
                                        Female
                                    </input>
                                </label>
                            </div>
                            <input class="btn btn-lg btn-success btn-block" type="submit" value="Submit">
                            </input>
                        </fieldset>
                    </form>
                    <div>
                     	<router-link :to="{ path: '/' }" class="pull-left">Already Account </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    register () {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        let data = {first_name: this.user.firstName,
          last_name: this.user.lastName,
          email: this.user.email,
          password: this.user.password,
          gender: this.user.gender
        }
        axios.post('/register', data).then(response => {
          swal({
            title: 'Success!',
            text: 'Your account was created successfuly',
            type: 'success',
            confirmButtonText: 'OK'
          })
          // Redirect to login view
          this.$router.push({ path: '/'})
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