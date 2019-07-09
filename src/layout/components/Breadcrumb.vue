<template>
    <el-breadcrumb class="breadcrumb" :separator="'/'">
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            {{item.meta.title}}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "Breadcrumb",
        components: {},
        data: function () {
            return {
                levelList: []
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb();
            }
        },
        created: function () {
            this.getBreadcrumb();
        },
        methods: {
            getBreadcrumb() {
                this.levelList = this.$route.matched.filter(item => item.meta && item.meta.title);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .breadcrumb {
        height: 50px;
        line-height: 50px;
    }
</style>