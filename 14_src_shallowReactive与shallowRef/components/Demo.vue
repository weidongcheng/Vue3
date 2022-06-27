<template>
  <h4>当前x.y的值是：{{x.y}}</h4>
  <button @click="x={y:888}">点我替换x</button>
  <button @click="x.y++">点我x.y++</button>
  <hr>
  <h4>{{person}}</h4>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>薪资:{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import {reactive, ref, shallowReactive, shallowRef, toRef, toRefs} from "vue";

export default {
  name: 'Demo',
  setup(){
    //数据
    // let person = shallowReactive({//只处理对象最外层的响应式
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    let x = shallowRef({//只处理基本类型的响应式，不进行对象类型的响应式处理
      y:0
    })

    console.log('*****',x)

    return{
      x,
      person,
      ...toRefs(person)
    }
  }
}
</script>