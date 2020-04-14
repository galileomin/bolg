<template>
    <div>
        <button @click="toTop"><span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span></button>
    </div>
</template>

<script>
export default {
    methods: {
        toTop(){
            scrollTo(0,0)
        }
    },
}
</script>

<style lang="scss" scoped>
button{
        position: fixed;
        top: 90%;
        left: 93%;
        border-radius: 25px;
        outline: none;
        border: 0;
        width: 50px;
        height: 50px;
        background-color: rgba(0,0,0,0.4)
    }
</style>