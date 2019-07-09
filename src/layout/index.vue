<template>
    <div class="app-wrapper">
        <div class="sidebar-container">
            <sidebar></sidebar>
        </div>
        <div class="main-container">
            <navbar></navbar>
            <!--suppress HtmlUnknownTag, CheckEmptyScriptTag -->
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Sidebar from "./components/Sidebar.vue"
    import Navbar from "./components/Navbar.vue"

    export default {
        components: {
            Sidebar,
            Navbar,
        }
    }
</script>

<style lang="scss" scoped>
    .app-wrapper {
        display: flex;
        height: 100vh;

        .sidebar-container {
            width: 200px;
            background-color: #304156;
            overflow: hidden;
        }
        .main-container {
            flex: 1;
        }
    }
</style>