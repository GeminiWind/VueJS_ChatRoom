<template>
  <ul class="nav navbar-nav navbar-right">
    <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
        <span class="user-avatar pull-left" style="margin-right:8px; margin-top:-5px;">
          <vue-letter-avatar :name="user.profile.first_name" size='30' class="img-responsive img-circle" v-if="user.profile.avatarLink == null"/>
          <vue-letter-avatar :name="user.profile.avatarLink" size='30' class="img-responsive img-circle" v-else/>
        </span>
        <span class="user-name">
        {{ user.fullName }}
        </span>
        <b class="caret">
        </b>
      </a>
      <ul class="dropdown-menu">
        <li>
          <div class="navbar-content">
            <div class="row">
              <div class="col-md-5">
                <vue-letter-avatar :name="user.profile.first_name" size='120' class="img-responsive img-circle" v-if="user.profile.avatarLink == null"/>
                <vue-letter-avatar :name="user.profile.avatarLink" size='120' class="img-responsive img-circle" v-else/>
                <p class="text-center small">
                  <a href="./3X6zm">
                  Change Photo
                  </a>
                </p>
              </div>
              <div class="col-md-7">
                <span>
                {{ user.fullName }}
                </span>
                <p class="text-muted small">
                  {{ user.email }}
                </p>
                <div class="divider">
                </div>
                <router-link :to="{path:'/profile'}" class="btn btn-default btn-xs">
                  <i aria-hidden="true" class="fa fa-user-o">
                  </i>
                  Profile
                </router-link>
                <a class="btn btn-default btn-xs" href="#">
                <i aria-hidden="true" class="fa fa-address-card-o">
                </i>
                Contacts
                </a>
                <router-link :to="{path:'/setting'}" class="btn btn-default btn-xs">
                  <i aria-hidden="true" class="fa fa-cogs">
                  </i>
                  Settings
                </router-link>
                <a class="btn btn-default btn-xs" href="#">
                <i aria-hidden="true" class="fa fa-question-circle-o">
                </i>
                Help!
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-footer">
            <div class="navbar-footer-content">
              <div class="row">
                <div class="col-md-6">
                  <a class="btn btn-default btn-sm" href="#">
                  <i aria-hidden="true" class="fa fa-unlock-alt">
                  </i>
                  Change Passowrd
                  </a>
                </div>
                <div class="col-md-6">
                  <router-link :to="{ path: '/logout' }" class="btn btn-default btn-sm pull-right">
                    <i aria-hidden="true" class="fa fa-power-off">
                    </i>
                    Sign Out
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: (state) => state.auth.profile
    })
  },
  beforeCreate () {
    console.log('LOL')
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
</script>

<style scope lang="scss">
.mainbody {
  background: #f0f0f0;
}

/* Special class on .container surrounding .navbar, used for positioning it into place. */

.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  margin-left: -15px;
  margin-right: -15px;
  .container {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar {
    padding-left: 15px;
    padding-right: 15px;
  }
}

/* Flip around the padding for proper display in narrow viewports */

.navbar-content {
  width: 320px;
  padding: 15px;
  padding-bottom: 0px;
  &:before, &:after {
    display: table;
    content: "";
    line-height: 0;
  }
}

.navbar-nav.navbar-right:last-child {
  margin-right: 15px !important;
}

.navbar-footer {
  background-color: #DDD;
}

.navbar-footer-content {
  padding: 15px 15px 15px 15px;
}

.dropdown-menu {
  padding: 0px;
  overflow: hidden;
}

.brand_network {
  color: #9D9D9D;
	float: left;
	position: absolute;
	left: 70px;
	top: 30px;
	ont-size: smaller;
}

.post-content {
	margin-left: 58px;
}

.badge-important {
	margin-top: 3px;
	margin-left: 25px;
	position: absolute;
}

body {
  background-color: #e8e8e8;
}
</style>