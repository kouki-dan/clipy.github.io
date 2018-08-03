<template>
  <div class="pc-header">
    <clipy-logo/>
    <nav>
      <ul class="header-buttons">
        <li><a href="#">コピー履歴</a></li>
        <li><a href="#">スニペット</a></li>
        <li><a href="#">自由に呼び出し</a></li>
        <li><a href="#">オープンソース</a></li>
      </ul>
    </nav>
    <div class="sns-buttons">
      <social-buttons/>
    </div>
    <div class="download-button">Download</div>
  </div>
</template>


<script>
import SocialButtons from '~/components/social/SocialButtons.vue'
import ClipyLogo from '~/components/ClipyLogo.vue'

export default {
  components: {
    SocialButtons,
    ClipyLogo
  }
}
</script>



<style>
.pc-header {
  display: flex;
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 40px;
}

.header-buttons {
  display: flex;
  list-style: none;
  margin: 8px 0;
  padding: 0;
}

.header-buttons a {
  text-decoration: none;
  color: #2d2d2d;
}

.header-buttons a:hover {
  opacity: 0.7;
}

.header-buttons li {
  margin: 0 16px;
}

.sns-buttons {
  margin: 8px 0;
  flex-shrink: 2;
}

.download-button {
  margin-top: -10px;
  margin-left: 8px;
  width: 176px;
  height: 52px;
  line-height: 48px;
  border-radius: 6px;
  border: solid 2px #3d90c9;
  color: #3d90c9;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}
</style>

