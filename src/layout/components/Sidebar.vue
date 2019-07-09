<template>
    <el-scrollbar>
        <el-menu
                :default-active="$router.path"
                :background-color="'#304156'"
                :text-color="'#bfcbd9'"
                :active-text-color="'#409EFF'">
            <sidebar-item :routes="routes"></sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    import SidebarItem from "./SidebarItem.vue"
    import {constRoutes} from "../../router/router"

    export default {
        name: "Sidebar",
        components: {
            SidebarItem
        },
        data: function () {
            return {
                routes: constRoutes,
            }
        }
    }
</script>