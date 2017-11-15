<template>
	<div class="navbar-wrapper">
    <div class="container-fluid">
        <div class="navbar navbar-default navbar-static-top" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
                        <span class="sr-only">
                            Toggle navigation
                        </span>
                        <span class="icon-bar">
                        </span>
                        <span class="icon-bar">
                        </span>
                        <span class="icon-bar">
                        </span>
                    </button>
                    <router-link :to="{ path: '/' }" class="navbar-brand" style="margin-right:-8px; margin-top:-5px;">
                        <img alt="Brand" height="30px" src="https://lut.im/7trApsDX08/GeilMRp1FIm4f2p7.png" width="30px">
                        </img>
                    </router-link>
                    <router-link :to="{ path: '/' }" class="navbar-brand" >
                        Dolphin
                    </router-link>
                    <i class="brand_network">
                        <small>
                            <small>
                                social Network
                            </small>
                        </small>
                    </i>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li>
                            <span class="badge badge-important">
                                2
                            </span>
                            <a href="#">
                                <i aria-hidden="true" class="fa fa-bell-o fa-lg">
                                </i>
                            </a>
                        </li>
                        <li>
                            <router-link :to="{path:'/chat'}">
                                <i aria-hidden="true" class="fa fa-envelope-o fa-lg">
                                </i>
                            </router-link>
                        </li>
                    </ul>
                    <Panel v-if="isAuth == true"></Panel>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Panel from '@components/auth/Panel';

export default {
  components: {
    Panel,
  },
  computed: {
    ...mapGetters({ isAuth: 'auth/isAuthenticated' }),
  },

};
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
	  font-size: smaller;
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
