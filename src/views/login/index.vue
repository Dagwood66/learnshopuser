<template>
    <div>
        <button @click="login">登录</button>
    </div>
</template>

<script>
    import {setToken} from "../../utils/auth"

    export default {
        methods: {
            login() {
                setToken("dasgdag");
                this.$router.push("/");
            }
        }
    }
</script>

<style lang="scss" scope>

</style>