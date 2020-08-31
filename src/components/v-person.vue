<template>
    <div class="v-person">
        <h1>{{message}}</h1>
        <div class="v-person_image" v-if="isValue">
        <img :src='person["image"]' alt="img">
        </div>
        <div class="v-person_data" v-if="isValue">
            <p>Имя: {{person.first_name}}</p>
            <p>Фамилия: {{person.last_name}}</p>
            <br>
            <p>Пол: {{person.gender}}</p>
            <p>Почта: {{person.email}}</p>
            <p>ID: {{person.id}}</p>
            <button class="v-person_data_btn" @click="historyBack">Back to cards</button>
        </div>
    </div>
</template>

<script>
import router from '../router/router.js'

export default {
    name: 'v-person',
    components: {},
    props: {
        router
    },
    data() {
        return {
            person: {},
            message: '',
            isValue: true
        }
    },
    async mounted() {
        try {
          const res = await fetch(`http://localhost:3000/${this.$route.params.id}`)
          this.person = await res.json();  
          this.isValue = true
        } catch(err) {
            this.message = 'HTTP error: 404 ' + err
            this.isValue = false
        }
    },
    methods: {
        historyBack() {
            router.go(-1)
        }
    }
}
</script>

<style lang="scss">
.v-person {
    display: flex;
    background-color: rgb(248, 248, 239);
    &_image {
        width: 250px;
        height: 250px;
    }
    &_data {
        display: flex;
        flex-direction: column;
        justify-items: flex-end;
        font-size: 20px;
        &_btn {
            color: #fff;
            text-decoration: none;
            user-select: none; 
            background: rgb(212,75,56);
            padding: .7em 1.5em; 
            outline: none;
        }
        &_btn:hover { background: rgb(232,95,76); }
        &_btn:active { background: rgb(152,15,0); ; } 
    }
}
</style>