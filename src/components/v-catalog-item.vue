<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item_image" :src = 'person_data.image' alt="img">
        <p class="v-catalog-item_name">{{person_data.first_name}}</p>
        <p class="v-catalog-item_name">{{person_data.last_name}}</p>
        <button class="v-catalog-item_btn" v-on:click="$emit('get-id', person_data.id['$oid'])">See more</button>
    </div>
</template>

<script>
export default {
    name: 'v-catalog-item',
    components: {},
    props: {
        person_data: {
            type: Object,
            default() {
                return {}
            }
        },
        person: {}
    },
    data() {
        return {
            title: 'Main catalog-item'
        }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {}
}
</script>

<style lang="scss">
@import '@/assets/styles/styles.scss';

.v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 12px 0 #e0e0e0;
    background-color: rgb(248, 248, 239);
    padding: $padding*2;
    margin-bottom: $margin*2;
    &_image {
        width: 100px;
        height: 200px;
    }
    &_btn {
        color: #fff;
        text-decoration: none;
        user-select: none; 
        background: rgb(118, 187, 7);
        padding: .7em 1.5em; 
        outline: none;
    }
    &_btn:hover { background: rgb(222, 232, 76); }
    &_btn:active { background: rgb(0, 152, 38); ; }
}

</style>