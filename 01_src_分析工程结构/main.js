//引入的不在是Vue构造函数，引入了一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象-app(类似之前Vue2中的vm，但app比vm更“轻”)
const app =createApp(App)

//挂载
app.mount('#app')
