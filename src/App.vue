<template>
    <div id="app">
        <!-- <keep-alive exclude=""> -->
            <router-view/>
        <!-- </keep-alive> -->
    </div>
</template>

<script>
import wx from 'weixin-js-sdk';
import storage from 'good-storage'
export default {
    methods:{

    },
    watch: {
        $route (to, from) {

        }
    },
    components:{

    }
}
</script>

<style lang="stylus">
@import "~util/reset.styl"
@import "~util/base.styl"
@import '~util/common.styl'
</style>
