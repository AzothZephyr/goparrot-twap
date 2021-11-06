<template>
  <Footer :class="isMobile ? 'mobile' : 'pc'">
    <div v-if="!isMobile" class="logo">
      <a href="/"><img src="@/assets/icons/woof-text-logo.png" /></a>
    </div>
    <div class="icon_list">
      <a :href="linkUrl.twitter" target="_blank" style="margin-left: 10px">
        <img src="@/assets/icons/twitter.svg" width="20" height="20" />
      </a>
      <a :href="linkUrl.discord" target="_blank" style="margin-left: 10px">
        <img src="@/assets/icons/discord.svg" width="20" height="20" />
      </a>
      <a :href="linkUrl.telegram" target="_blank" style="margin-left: 10px">
        <img src="@/assets/icons/telegram.svg" width="20" height="20" />
      </a>
    </div>
    <div v-if="isMobile" class="logo">
      <a href="/"><img src="@/assets/icons/woof-text-logo.png" /></a>
    </div>
  </Footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import { Layout } from 'ant-design-vue'

const { Footer } = Layout

@Component({
  components: {
    Footer
  }
})
export default class Foot extends Vue {
  navOpened = false
  linkUrl = {
    home: '/',
    app: '/swap/',
    info: '/info/',
    listing: 'https://forms.gle/Ct7ySJkxQyUvrHR99',
    twitter: 'https://twitter.com/WoofSolana',
    discord: 'https://discord.gg/Cbe7eyHD75',
    telegram: 'https://t.me/woofsolana'
  }

  get isMobile() {
    return this.$accessor.isMobile
  }

  beforeMount() {
    this.$accessor.queryIsMobile()
  }
}
</script>

<style lang="less" scoped>
.mobile {
  .link-menu {
    span {
      display: inline-block;
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: #84879c;
      padding-top: 16px;
    }
  }

  .icon_list {
    text-align: center;
    margin: 48px 0;
  }

  .logo {
    img {
      max-height: 32px;
    }

    text-align: center;
    margin-bottom: 50px;
  }
}

.pc {
  display: flex;
  z-index: 1;
  justify-content: space-between;

  .logo {
    img {
      max-height: 32px;
    }
  }

  .link-menu {
    a {
      display: inline-block;
      width: 100px;
      text-align: center;
      font-size: 14px;
      color: #84879c;

      &:hover {
        color: #212121;
      }
    }
  }
}
</style>
