import axios from 'axios'
const httpServer = {}

httpServer.install = function (Vue) {
  axios.defaults.baseURL = 'http://api.xiaomadagege.cn:3355/api/private/v1/'
  Vue.prototype.$http = axios
}

export default httpServer
