<template>
    <div>
        <template v-for="item in routes" v-if="!item.hidden">
            <!--suppress HtmlUnknownTag -->
            <router-link v-if="!isShowChildren(item)" :to="item.path">
                <el-menu-item :index="resolvePath(item)">{{item.meta.title}}</el-menu-item>
            </router-link>
            <el-submenu v-else :index="resolvePath(item)">
                <template slot="title">
                    {{item.meta.title}}
                </template>
                <!--suppress HtmlUnknownTag -->
                <router-link :to="item.path">
                    <el-menu-item :index="resolvePath(item)">{{item.meta.title}}</el-menu-item>
                </router-link>
            </el-submenu>
        </template>
    </div>
</template>

<script>

    export default {
        name: "SidebarItem",
        props: {
            routes: {
                type: Array
            }
        },
        mounted: function () {
        },
        methods: {
            isShowChildren(route) {
                if (!route.children) {
                    return false;
                }
                return route.children.length > 0;
            },
            resolvePath(item) {
                return item.path;
            }
        }
    }
</script>