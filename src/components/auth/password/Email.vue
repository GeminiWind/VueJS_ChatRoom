<template lang="html">
  <div class="container">
      <div class="row">
          <div class="col-md-4 col-md-offset-4">
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <h3 class="panel-title">
                          Forget Password
                      </h3>
                  </div>
                  <div class="panel-body">
                      <form @submit.prevent="forget">
                          <fieldset>
                              <div class="form-group">
                                  <input class="form-control" name="email" placeholder="E-mail" type="text" v-validate="'required|email'" v-model=email>
                                  </input>
                                  <div v-show="errors.has('email')" class="alert alert-danger">{{ errors.first('email') }}</div>
                              </div>
                              <input class="btn btn-lg btn-primary btn-block" type="submit" value="Submit">
                              </input>
                          </fieldset>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'email',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    forget() {
      this.$validator.validateAll();
      if (!this.errors.any()) {
        this.$http.post('/forget', { email: this.email }).then((response) => {
          if (response.data.error == null) {
            this.$swal.success('Success!', 'An email was sent for your email! Please check it');
          } else {
            this.$swal.error('Whoops!', response.data.error);
          }
        }).catch((error) => {
          this.$swal.error('Whoops!', error);
        });
      }
    },
  },
};
</script>

<style scoped>
body{padding-top:20px;}
</style>
