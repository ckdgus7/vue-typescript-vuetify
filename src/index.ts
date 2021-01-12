import externalComponent from './components/HelloWorld.vue';

const install = (Vue: any) => {
  Vue.component('youtube-vue', externalComponent);
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
    externalComponent
}

export default install;