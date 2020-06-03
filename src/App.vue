<template>
  <v-app id="app">
    <v-app-bar
      class="app-bar"
      color="black"
      app
      fixed
      dark
      :height="70"
    >
      <div class="app-urls">
        <router-link
          v-on:click="setActiveTab"
          v-for="(tab, i) in tabs"
          :key="i"
          :class="{active: tab.name === $route.name}"
          class="nav-url"
          :to="tab.path"
        >
          {{ tab.name }}
        </router-link>
      </div>
      <transition>
        <v-dialog v-model="dialog" fullscreen dark hide-overlay>
          <template v-slot:activator="{ on }">
            <v-btn class="hamburger-menu-icon" icon v-on="on">
              <font-awesome-icon v-if="!dialog" icon="bars" size="lg" />
            </v-btn>
          </template>
          <v-card>
            <v-toolbar class="menu-dialog-toolbar" :height="80" flat>
              <v-btn class="close-menu-button" icon dark>
                <font-awesome-icon v-if="dialog" icon="times" @click="dialog = false" size="lg" />
              </v-btn>
            </v-toolbar>
            <v-list class="mobile-menu-content">
             <v-list-item v-for="(tab, i) in tabs" :key="i" @click="dialog = false">
                 <router-link
                    class="nav-url"
                    :to="tab.path"
                 >
                    {{ tab.name }}
                  </router-link>
             </v-list-item>
           </v-list>
          </v-card>
        </v-dialog>
      </transition>
      <v-spacer></v-spacer>
      <v-btn small class="download-button" dark>
        <a
          class="download-button-link"
          href="Iulia_Mihet_CV.pdf"
          download
        >
            Download CV</a>
      </v-btn>
    </v-app-bar>
    <v-content>
      <transition
        :name="transitionName"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </v-content>
    <AppFooter app></AppFooter>
  </v-app>
</template>

<style scoped lang="scss">
  .nav-url {
    padding: 11px 25px;
    font-size: 1.7em;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    color: $white;
  }

  .router-link-active {
    border-bottom: 6px solid $light-red;
  }

  .app-urls {
    display: block;
  }

  .mobile-menu, .hamburger-menu-icon {
    display: none;
  }

  .app-bar-tab:hover {
    color: $yellow !important;
  }

  .download-button {
    padding-right: 10px;
  }

  .download-button-link {
    color: $white;
    font-size: 1.2em;
    text-decoration: none;
  }

  .download-button-link:hover, .download-button:hover {
    color: $yellow !important;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.3s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(0, 2em);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(0, -2em);
  }

  @media screen and (max-width: 1260px) {
    .v-list-item {
      padding: 0;
    }

    .menu-dialog-toolbar {
      background-color: #1E1E1E !important;
    }

    .mobile-menu-content {
      width: 100%;
      text-align: center;
    }

    .nav-url {
      font-size: 1.4em;
      font-weight: 200;
    }
  }

  @media screen and (max-width: 768px) {
    .hamburger-menu-icon {
      display: block;
    }

    .nav-url {
      padding: 10px;
      width: 100%;
    }

    .close-menu-button {
      padding-left: 16px;
    }

    .app-urls {
      display: none;
    }

    .router-link-active {
      border-bottom: none;
      background-color: lighten($yellow, 5%);
      color: $black;
    }
  }
</style>

<script>
  import AppFooter from "./components/AppFooter";

  export default {
    name: 'App',
    components: { AppFooter },
    data: () => ({
      transitionName: 'slide-left',
      dialog: false,
      tabs: [{
        name: 'home',
        path: '/home'
      }, {
        name: 'about',
        path: '/about'
      }, {
        name: 'career',
        path: '/career'
      }, {
        name: 'skills',
        path: '/skills'
      }],
      activeTab: undefined
    }),
    created() {
      this.activeTab = this.$route.name;
      this.$router.beforeEach((to, from, next) => {
        this.activeTab = to.name;
        const toPage = to.meta.pageNumber;
        const fromPage = from.meta.pageNumber;
        this.transitionName = toPage < fromPage ? 'slide-right' : 'slide-left';
        next();
      })
    },
    watch: {
      $route (to, from){
      if(to.name !== from.name) {
        this.activeTab = to.name;
        }
      },
    },
    methods: {
      setActiveTab() {
          this.activeTab = this.$route.name;
      }
    }
};
</script>
