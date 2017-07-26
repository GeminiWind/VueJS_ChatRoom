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
                    <a class="navbar-brand" href="./ORqmj" style="margin-right:-8px; margin-top:-5px;">
                        <img alt="Brand" height="30px" src="https://lut.im/7trApsDX08/GeilMRp1FIm4f2p7.png" width="30px">
                        </img>
                    </a>
                    <a class="navbar-brand" href="./ORqmj">
                        Dolphin
                    </a>
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
                    <ul class="nav navbar-nav navbar-right" v-show="isAuth">
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                <span class="user-avatar pull-left" style="margin-right:8px; margin-top:-5px;">
                                    <img alt="John Doe" class="img-responsive img-circle" height="30px" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" title="John Doe" width="30px">
                                    </img>
                                </span>
                                <span class="user-name">
                                    John Doe
                                </span>
                                <b class="caret">
                                </b>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <div class="navbar-content">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <img alt="Alternate Text" class="img-responsive" height="120px" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="120px"/>
                                                <p class="text-center small">
                                                    <a href="./3X6zm">
                                                        Change Photo
                                                    </a>
                                                </p>
                                            </div>
                                            <div class="col-md-7">
                                                <span>
                                                    John Doe
                                                </span>
                                                <p class="text-muted small">
                                                    example@pods.tld
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
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  computed: {
    isAuth () {
      return this.$auth.isAuthenticated()
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