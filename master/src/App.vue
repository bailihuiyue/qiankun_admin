<template>
  <a-config-provider :locale="locale">
    <div id="master">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
import { AppDeviceEnquire } from '@/utils/mixin'

export default {
  mixins: [AppDeviceEnquire],
  data () {
    return {
      locale: window.localStorage.getItem('lang') === 'en' ? enUS : zhCN
    }
  },
  mounted () {}
}
</script>
