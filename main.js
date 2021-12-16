var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Điện thoại Iphone'
    },
    methods: {
        say: function(text) {
            return 'Hello ' + text
        }
    }
})
console.log(vueInstance)

setTimeout(() => {
    vueInstance.title = 'Điện thoại Iphone 13'
}, 3000);