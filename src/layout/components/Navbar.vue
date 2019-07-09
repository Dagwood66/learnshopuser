<template>
    <div class="navbar">
        <hamburger class="hamburger-container"></hamburger>
        <breadcrumb class="breadcrumb-container"></breadcrumb>
    </div>
</template>

<script>
    import Breadcrumb from "./Breadcrumb.vue"
    import Hamburger from "./Hamburger.vue"

    export default {
        name: "Navbar",
        components: {
            Breadcrumb,
            Hamburger,
        },
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
    .navbar {
        display: flex;
        height: 50px;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
        overflow: hidden;

        .hamburger-container {
            float: left;
            line-height: 46px;
        }

        .breadcrumb-container {
            float: left;
        }
    }
</style>