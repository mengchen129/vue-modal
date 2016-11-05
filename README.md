# vue-modal
基于Vue.js编写的弹窗组件

## 用法
在HTML中引用组件:
```html
<v-modal v-ref:modal></v-modal>
```

在js中导入组件:
```javascript
import Modal from './components/Modal.vue';
import ModalApi from './components/ModalApi';
Vue.component(Modal.tagName, Modal);

new Vue({ 
    // ...
    modalRef: 'modal',
    mixins: [ModalApi],
    // ...
});
```

在其他vue组件中使用Modal:
```javascript
import ModalApi from './components/ModalApi';

export detault { 
    // ...
    mixins: [ModalApi]
    // ...
}
```

## API
### 弹出alert消息
```javascript
this.alert('Hello, Vue!');
```

### 弹出confirm消息
```javascript
this.confirm('Confirm delete this item?', 'Confirm', (ok) => {
    if (ok) {
        // do something
    }
});
```

### 自定义弹出内容
(待完善)