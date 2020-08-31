<template>
<!-- Здесь очень тупо получилось, не смог использовать <router-link> пришлось делать простыми ссылками -->
    <div class="v-links">
        <a class="v-links_link" href=" http://localhost:8080/?page=1">1</a>
        <a class="v-links_link" href=" http://localhost:8080/?page=2">2</a>
        <a class="v-links_link" href=" http://localhost:8080/?page=3">3</a>
        <a class="v-links_link" href=" http://localhost:8080/?page=4">4</a>
        <a class="v-links_link" href=" http://localhost:8080/?page=5">5</a>
        <a class="v-links_link" href=" http://localhost:8080/?page=6">6</a>
        <a class="v-links_link" href=" http://localhost:8080/?page=7">7</a>
        <a class="v-links_link" href=" http://localhost:8080/?page=8">8</a>
        <a class="v-links_link" href=" http://localhost:8080/?page=9">9</a>
    </div>
    
</template>

<script>

export default {
    name: 'v-links',
    components: {},
    props: {
        people: []
    },
    data() {
        return {}
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {}
}
</script>

<style lang="scss">
.v-links {
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-items: space-between;
    justify-content: center;
    // border: thick double #32a1ce;
    
    &_link {
        font-size: 24px;
        margin: 10px 15px;
        text-decoration: none;
        color: black;
        width: 30px;   
    }
    &_link:hover { background-color: red; }
}
</style>