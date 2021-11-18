<template>
  <div :class="isMobile ? 'mobile' : 'pc'">
    <div class="big_div image_div" style="background: rgb(19, 26, 53)">
      <img src="../assets/background/info_background.svg" class="image" />
      <div class="node_div" style="padding-top: 70px">
        <a href="/">
          <img src="../assets/icons/woof-text-logo.png" class="big_logo" />
        </a>
      </div>
    </div>
    <div class="big_div div3">
      <div class="node_div">
        <div class="title_div">
          <div class="font_color_3 title_node">
            <img src="../assets/images/logo1-1-2.png" class="title_image" />
            <p class="title_text">
              WOOF tested the idea of the effect of burning tokens by creating a massive total supply of 1 Trillion
              tokens, and removing half from the supply each day.
            </p>
          </div>
          <div class="font_color_2 title_node_2">
            <!-- This div is only displayed on mobile, in css we set to display: none otherwise -->
            <div class="nav_buttons">
              <a href="/dex" class="button" target="_parent">
                <button class="button_link">DEX</button>
              </a>
              <a href="/nft" target="_parent">
                <button class="button_link">NFT Marketplace</button>
              </a>
              <a href="/nft" target="_parent">
                <button class="button_link">Whitebook</button>
              </a>
            </div>
            <br />
            <div class="nav_buttons">
              <a href="https://twitter.com/woofsolana" target="_parent">
                <button class="button_link">
                  <img src="../assets/images/twitter.png" loading="lazy" alt="" />
                </button>
              </a>
              <a href="https://twitter.com/woofsolana" target="_parent">
                <button class="button_link">
                  <img src="../assets/images/discord.png" loading="lazy" alt="" />
                </button>
              </a>
              <a href="https://twitter.com/woofsolana" target="_parent">
                <button class="button_link">
                  <img src="../assets/images/cmc.png" loading="lazy" alt="" />
                </button>
              </a>
              <a href="https://twitter.com/woofsolana" target="_blank">
                <button class="button_link">
                  <img src="../assets/images/coingecko.png" loading="lazy" alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="big_div div4">
      <div class="node_div">
        <div class="tokenomics_div">
          <div class="font_color_1 title">Tokenomics</div>
          <ul class="font_color_2 node">
            <p>98% of total supply of one trillion was burned. The rest was airdropped to the community.</p>

            <li><b>Maximum Supply:</b> 1,000,000,000,000</li>
            <li><b>Burned:</b> 982,097,000,075</li>
            <li><b>Current Supply:</b> 17,902,999,925</li>
            <li><b>The total number of Woof tokens</b> 18.2B</li>
            <li>No actual dogs were burned in this process</li>
          </ul>
        </div>
        <div class="tokenomics_div">
          <img
            src="../assets/images/costum-doge.png"
            loading="lazy"
            alt=""
            height="400px"
            width="400px"
            class="tokenomics_image"
          />
        </div>
        <div style="clear: both"></div>
      </div>
    </div>
    <div class="big_div image_div div5">
      <img src="../assets/background/info_background2.svg" class="image2" />
      <div class="node_div">
<div class="node_div">
        <div class="font_color_1 team_title">Roadmap</div>
        <div style="font-weight: 100">
          <div class="team_table_line">
            <div class="font_color_3 name">Q3 2021</div>
            <div class="font_color_2 value">
              <li>Token hyperdeflation occurred by burning 1/2 of the remaining un-airdropped supply each day</li>
            </div>
            <div style="clear: both"></div>
          </div>
          <div class="team_table_line">
            <div class="font_color_3 name">Q4 2021</div>
            <div class="font_color_2 value">
              <ul>
                <li>Launch DEX</li>
                <li>Exchange listing on Bitrue</li>
                <li>Grow the projects social media presence</li>
                <li>Grow partnerships with creators in the NFT space</li>
                <li>Further expansion and growth of partnerships with centralized exchanges</li>
              </ul>
            </div>
            <div style="clear: both"></div>
          </div>
          <div class="team_table_line">
            <div class="font_color_3 name">Q1-Q2 2022</div>
            <div class="font_color_2 value">
              <ul>
                <li>Launch NFT Marketplace</li>
                <li>Develop governance model proposals for DAO</li>
                <li>Continue growing relationships to increase centralized exchange listings</li>
              </ul>
            </div>
            <div style="clear: both"></div>
          </div>
          <div class="team_table_line">
            <div class="font_color_3 name">Q3-Q4</div>
            <div class="font_color_2 value">
              <ul>
                <li>Continued partnership growth with NFT projects and artists</li>
              </ul>
            </div>
            <div style="clear: both"></div>
          </div>
        </div>
      </div>
        <div style="clear: both"></div>
      </div>
    </div>
    <div class="big_div div6">
      <div class="node_div">
        <div class="team-section wf-section">
          <div class="mycontain">
            <h2 class="discord_invite">The Team</h2>
            <ul role="list" class="team-list">
              <li class="team-card">
                <a href="https://twitter.com/0xAkaza" target="_blank" class="team-link-wrap w-inline-block"
                  ><img src="../assets/images/akaza.png" loading="lazy" width="89" alt="" class="team-image" />
                  <div class="team-name">akaza</div>
                </a>
              </li>
              <li class="team-card">
                <a href="https://twitter.com/0xAzoth" target="_blank" class="team-link-wrap w-inline-block"
                  ><img src="../assets/images/azoth.png" loading="lazy" width="89" alt="" class="team-image" />
                  <div class="team-name">0xAzoth</div>
                </a>
              </li>
              <li class="team-card">
                <a href="#" class="team-link-wrap w-inline-block"
                  ><img src="../assets/images/akaza.png" loading="lazy" width="89" alt="" class="team-image" />
                  <div class="team-name">rorbro</div>
                </a>
              </li>
              <li class="team-card">
                <a href="#" class="team-link-wrap w-inline-block"
                  ><img src="../assets/images/hennerz.png" loading="lazy" width="89" alt="" class="team-image" />
                  <div class="team-name">hennerz</div>
                </a>
              </li>
              <li class="team-card">
                <a href="#" class="team-link-wrap w-inline-block"
                  ><img src="../assets/images/nyk.png" loading="lazy" width="89" alt="" class="team-image" />
                  <div class="team-name">nyk</div>
                </a>
              </li>
              <li class="team-card">
                <a href="#" class="team-link-wrap w-inline-block"
                  ><img src="../assets/images/joey.png" loading="lazy" width="89" alt="" class="team-image" />
                  <div class="team-name">Joey</div>
                </a>
              </li>
              <li class="team-card">
                <a href="#" class="team-link-wrap w-inline-block"
                  ><img src="../assets/images/akaza.png" loading="lazy" width="89" alt="" class="team-image" />
                  <div class="team-name">ameeno</div>
                </a>
              </li>
              <li class="team-card">
                <a href="#" class="team-link-wrap w-inline-block"
                  ><img src="../assets/images/akaza.png" loading="lazy" width="89" alt="" class="team-image" />
                  <div class="team-name">taestro</div>
                </a>
              </li>
              <li class="team-card">
                <a href="#" class="team-link-wrap w-inline-block"
                  ><img src="../assets/images/akaza.png" loading="lazy" width="89" alt="" class="team-image" />
                  <div class="team-name">eche</div>
                </a>
              </li>
              <li class="team-card">
                <a href="#" class="team-link-wrap w-inline-block"
                  ><img src="../assets/images/desperados.png" loading="lazy" width="89" alt="" class="team-image" />
                  <div class="team-name">desperados</div>
                </a>
              </li>
              <!-- <li class="team-card" style="visibility:hidden;">
              </li> -->
              <li class="team-card">
                <a href="#" class="team-link-wrap w-inline-block"
                  ><img src="../assets/images/akaza.png" loading="lazy" width="89" alt="" class="team-image" />
                  <div class="team-name">shenwansanat</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="big_div div7">
      <div class="font-color-3 discord_invite">
        <h1 class="discord_invite">Join the community on discord!</h1>
              <a href="https://twitter.com/woofsolana" target="_parent">
                <button class="button_link">
                  <img src="../assets/images/discord.png" loading="lazy" alt="" />
                </button>
              </a>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'single',

  head: {
    title: 'WOOF - Solanas Meme Coin'
  },

  async asyncData({ $accessor, $api }) {
    if (!$accessor.price.initialized) {
      await $accessor.price.requestPrices()
    }

    const { tvl, volume24h } = await $api.getInfo()
    return { tvl, volume24h }
  }
})
export default class Info extends Vue {
  tvl = 0
  volume24h = 0
  timer: number | undefined = undefined

  get isMobile() {
    return this.$accessor.isMobile
  }

  get prices() {
    return this.$accessor.price.prices
  }

  mounted() {
    this.timer = window.setInterval(this.getInfo, 1000 * 30)
  }

  beforeDestroy() {
    window.clearInterval(this.timer)
  }

  async getInfo() {
    const { tvl, volume24h } = await this.$api.getInfo()
    this.tvl = tvl
    this.volume24h = volume24h
  }
}
</script>

<style lang="less" scoped>
.mobile {
  .div7 {
    padding-top: 50px;
    padding-bottom: 50px;
    background: #1a2843;
  }

  .div6 {
    padding-top: 50px;
    padding-bottom: 50px;
    background: #131e39;
  }

  .div5 {
    padding-top: 50px;
    padding-bottom: 50px;
    background: #1a2843;
  }

  .div4 {
    padding-top: 50px;
    padding-bottom: 50px;
    background: #131e39;
  }

  .div3 {
    padding-top: 30px;
    padding-bottom: 50px;
    background: #131a35;
  }

  .big_logo {
    width: 180px;
  }

  .big_div {
    width: 100%;
  }

  .node_div {
    width: 80%;
    margin: 0 auto;
  }

  .font_color_1 {
    color: rgba(241, 241, 242, 1);
  }

  .font_color_2 {
    color: #bbbebc;
  }

  .font_color_3 {
    color: #84879c;
  }

  .font_center {
    text-align: center;
  }

  .title {
    font-size: 45px;
    padding-top: 50px;
  }

  .title_node_2 {
    font-size: 18px;
    width: 100%;
    padding-top: 25px;
  }

  .title_node {
    max-width: 100%;
    min-width: 40%;
    vertical-align: center;

    .title_text {
      max-width: 80%;
      font-size: 22px;
      min-width: 80%;
      margin: 5%;
      text-align: center;
    }

    .title_image {
      width: 80%;
      height: 80%;
      margin: 5%;
      margin-top: 10%;
    }
  }

  .data_div {
    width: 90%;
    display: inline-block;
    border: 1px #05bec5 solid;
    margin-bottom: 30px;

    .data_div_num {
      font-size: 30px;
      padding-top: 15px;
      padding-bottom: 20px;
      font-weight: 100;
    }

    .data_div_title {
      font-size: 22px;
      padding-top: 23px;
    }
  }

  .tokenomics_div {
    height: 100%;
    width: 100%;

    .title {
      font-size: 25px;
      padding-bottom: 20px;
    }

    .node {
      font-size: 18px;
      line-height: 1.4;
    }

    .tokenomics_image {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      height: 80%;
      margin-top: 10%;
    }
  }

  .circulating_div {
    .title {
      font-size: 25px;
      font-weight: 100;
    }

    .node {
      font-size: 18px;
      padding-top: 10px;
    }

    .node_2 {
      font-size: 18px;
      padding: 10px 0;
    }
  }

  .Allocation {
    font-size: 25px;
    text-align: center;
    padding-bottom: 20px;
  }

  .Allocation_table {
    font-size: 16px;

    .num {
      text-align: left;
    }

    .value {
      text-align: right;
    }
  }

  .team_title {
    font-size: 30px;
    padding-bottom: 20px;
  }

  .button_link {
    font-size: 16px;
    background: rgba(90, 196, 190, 0.1);
    padding: 13px 24px;
    border: 1px solid #5ac4be;
    margin-top: 20px;
    border-radius: 4px;
    width: 90%;
    text-align: center;

    .button_link_coin {
      font-size: 5px;
      display: inline-block;
      padding-left: 20px;
    }
  }

  .image_div {
    position: relative;

    .image {
      position: absolute;
      width: 932px;
      height: 780.35px;
      right: 0;
      top: 0;
      z-index: 1;
    }

    .image2 {
      position: absolute;
      width: 70%;
      top: -70px;
    }

    .nav_buttons_div {
      display: none;
    }
  }

  .funding_and_stakeholders_table_line {
    border-bottom: 1px solid rgba(119, 227, 239, 1);
    padding: 10px 0;
    font-size: 15px;

    .value {
      display: inline-block;
      width: 49%;
    }
  }

  .allocation_breakdown_table_line {
    border-bottom: 1px solid rgba(119, 227, 239, 1);
    padding: 16px 0;

    .item_other {
      display: inline-block;
      width: 49%;
    }

    .item_title {
      width: 100%;
    }
  }

  .team_table_line {
    border-bottom: rgba(128, 128, 255, 1) 1px solid;
    margin: 10px 0;
    padding-bottom: 34px;
    font-size: 20px;

    .name {
      font-size: 25px;
      margin-bottom: 10px;
    }

    .value {
      font-size: 16px;
    }
  }

    .team-list {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    list-style-type: none;
    margin-top: 20px;
    height: 80%;
  }

  .team-card {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 60%;
    margin-right: 1rem;
    margin-bottom: 2rem;
    margin-left: 1rem;
    padding: 0.25rem 0.125rem 2rem;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px none #000;
    background-color: #271f30;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#69d9e4), color-stop(90%, #271f30));
    background-image: linear-gradient(180deg, #131e39a2, rgba(128, 128, 255, 0.185) 90%);
  }



  .team-card.social-button {
    width: 350px;
    height: auto;
    margin-top: 60px;
    margin-right: auto;
    margin-left: auto;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
  }

  .team-card.buy {
    width: 33%;
  }

  .team-image {
    margin-bottom: 1rem;
    -webkit-transition: all 200ms cubic-bezier(.215, .61, .355, 1);
    transition: all 200ms cubic-bezier(.215, .61, .355, 1);
    display: flex;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    height: 80%;
  }

  .team-name {
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: #fff;
    font-size: 24px;
    line-height: 48px;
    font-weight: 500;
    text-align: center;
  }

  .team-link {
    margin-top: 1rem;
    text-align: center;
  }

  .discord_invite{
    color: #fff;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    height: 80%;
    width: 80%;
  }
}

.pc {
  .div7 {
    padding-top: 110px;
    padding-bottom: 100px;
    background: #1a2843;
  }

  .div6 {
    padding-top: 110px;
    padding-bottom: 120px;
    background: #131e39;
  }

  .div5 {
    padding-top: 110px;
    padding-bottom: 120px;
    background: #1a2843;
  }

  .div4 {
    padding-top: 110px;
    padding-bottom: 100px;
    background: #131e39;
  }

  .div3 {
    padding-top: 100px;
    padding-bottom: 120px;
    background: #131a35;
  }

  .big_logo {
    width: 260px;
    height: 80px;
  }

  .big_div {
    width: 100%;
  }

  .node_div {
    width: 80%;
    margin: 0 auto;

    .title {
      font-size: 65px;
      padding-top: 100px;
    }
  }

  .font_color_1 {
    color: rgba(241, 241, 242, 1);
  }

  .font_color_2 {
    color: #bbbebc;
  }

  .font_color_3 {
    color: #84879c;
  }

  .font_center {
    text-align: center;
  }

  .title_node {
    display: flex;
    max-width: 100%;
    min-width: 40%;
    height: 400px;

    .title_text {
      font-size: 24px;
      margin: 15%;
      width: 50%;
      text-align: center;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .title_image {
      width: 400px;
      height: 400px;
      float: right;
      margin: 5%;
      // border: 15px gold solid;
      z-index: 5;
    }
  }

  .title_node_2 {
    font-size: 20px;
    padding-top: 50px;

    .nav_buttons {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  .data_div {
    width: 30%;
    min-height: 189px;
    display: inline-block;
    border: 1px #05bec5 solid;
    margin: 1%;

    .data_div_num {
      font-size: 40px;
      padding-top: 15px;
      padding-bottom: 40px;
      font-weight: 100;
    }

    .data_div_title {
      font-size: 32px;
      padding-top: 43px;
    }
  }

  .tokenomics_div {
    width: 50%;
    float: left;

    .title {
      font-size: 40px;
      padding-bottom: 40px;
    }

    .node {
      font-size: 20px;
      width: 90%;
      line-height: 1.5;
    }

    .tokenomics_image {
      display: block;
      margin-left: auto;
      margin-right: auto;
      // width: 40%;
      height: 100%;
      padding-top: 120px;
    }
  }

  .circulating_div {
    float: right;
    width: 50%;

    .title {
      font-size: 40px;
      font-weight: 100;
    }

    .node {
      font-size: 20px;
      padding-top: 20px;
    }

    .node_2 {
      font-size: 20px;
      padding: 30px 0;
    }
  }

  .Allocation {
    font-size: 40px;
    text-align: center;
    padding-bottom: 60px;
  }

  .Allocation_table {
    font-size: 20px;

    .num {
      text-align: center;
    }

    .value {
      text-align: right;
    }
  }

  .team_title {
    font-size: 40px;
    padding-bottom: 60px;
  }

  .button_link {
    font-size: 16px;
    background: rgba(90, 196, 190, 0.1);
    padding: 13px 24px;
    border: 1px solid #5ac4be;
    margin-top: 50px;
    border-radius: 4px;
    margin-right: 30px;

    .button_link_coin {
      font-size: 5px;
      display: inline-block;
      padding-left: 20px;
    }
  }

  .image_div {
    position: relative;

    .image {
      position: absolute;
      width: 932px;
      height: 780.35px;
      right: 0;
      top: 0;
      z-index: 1;
    }

    .image2 {
      position: absolute;
      width: 932px;
      height: 780.35px;
      top: -70px;
    }

    .nav_buttons_div {
      position: absolute;
      float: right;
      width: 40%;
      height: 5%;
      right: 0;
      top: 50px;
    }
  }

  .funding_and_stakeholders_table_line {
    border-bottom: 1px solid rgba(119, 227, 239, 1);
    padding: 16px 0;
    font-size: 20px;

    .value {
      display: inline-block;
      width: 49%;
    }
  }

  .allocation_breakdown_table_line {
    border-bottom: 1px solid rgba(119, 227, 239, 1);
    padding: 16px 0;

    .item {
      display: inline-block;
      width: 32%;
    }
  }

  .team_table_line {
    border-bottom: rgba(128, 128, 255, 1) 1px solid;
    margin: 34px 0;
    padding-bottom: 34px;
    font-size: 20px;

    .name {
      float: left;
      width: 40%;
      font-size: 34px;
    }

    .value {
      float: left;
      width: 60%;
    }
  }

  .team-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  list-style-type: none;
}

.team-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 25%;
  margin-right: 1rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  padding: 0.25rem 0.125rem 2rem;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px none #000;
  background-color: #271f30;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#69d9e4), color-stop(90%, #271f30));
  background-image: linear-gradient(180deg, #131e39a2, rgba(128, 128, 255, 0.185) 90%);
}

.team-card.social-button {
  width: 350px;
  height: auto;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
}

.team-card.buy {
  width: 33%;
}

.team-image {
  margin-bottom: 1rem;
  -webkit-transition: all 200ms cubic-bezier(.215, .61, .355, 1);
  transition: all 200ms cubic-bezier(.215, .61, .355, 1);
  display: flex;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  height: 80%;
}

.team-image:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.team-name {
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #fff;
  font-size: 24px;
  line-height: 48px;
  font-weight: 500;
  text-align: center;
}

.team-link {
  margin-top: 1rem;
  text-align: center;
}

.discord_invite{
  color: #fff;
  text-align: center;
}
}
</style>
