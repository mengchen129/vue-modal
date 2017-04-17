# vue-modal
基于 Vue.js 2.0 编写的弹窗组件 (之前的 1.0 版本已经废弃)

## 示例

[查看实例](https://mengchen129.github.io/vue-modal/index.html)

## 配置
在模板中标记组件:
```html
<v-modal ref="modal"></v-modal>
```

导入组件相关代码:
```javascript
import Modal from './Modal.vue';
import ModalApi from './ModalApi';
import modalEventBind from './ModalEventBind';
```
在 mounted 钩子中绑定元素：
```javascript
mounted() {
    modalEventBind(this.$refs.modal);
}
```

在根实例中引用组件并混合api:
```javascript
export default { 
    mixins: [ModalApi],
    components: {
        [Modal.name]: Modal
    }
}
```

在单页应用中，只需要在根组件做以上配置工作，在其他子组件中只需要混合api即可调用相关API。
```javascript
export default {
    mixins: [ModalApi],
}
```

## API
#### 弹出 alert 消息
```javascript
this.alert('Hello, Vue!');
```

#### 弹出 confirm 消息
```javascript
this.confirm('Confirm delete this item?', 'Confirm', (ok) => {
    if (ok) {
        // do something if press ok
    } else {
        // do something if press cancel
    }
});
```

#### 弹出 prompt 消息
```javascript
this.prompt('输入你的税前工资', '薪资计算器', (salary) => {
    console.log('你输入的数据为：' + salary);
}, {inputType: 'number'});
```