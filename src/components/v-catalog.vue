<template>
    <div class="v-catalog">
        <h1>{{message}}</h1>
        <v-links v-if="vision"></v-links>
        <div class="v-catalog_list">
            <v-catalog-item
                v-for="person in people"
                :key="person.id['$oid']"
                :person_data="person"
                v-on:get-id="getInfo"
                >
            </v-catalog-item>
        </div>
        <v-links v-if="vision"></v-links>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import vLinks from './v-links'

export default {
    name: 'v-catalog',
    components: {
        vCatalogItem,
        vLinks,
    },
    props: {},
    data() {
        return {
            people: [],
            page: 1,
            person: {},
            message: '',
            vision: true
        }
    },
    computed: {},
    methods: {
        savePeople() {
            const parsed = JSON.stringify(this.people);
            localStorage.setItem(`people${this.$route.query.page}`, parsed);
            console.log('localStorage обновлен');
            },
        getInfo(id) {
            document.location = `http://localhost:8080/${id}`
        }
    },
         
    async mounted() {
        if (localStorage.getItem(`people${this.$route.query.page}`)) {
            this.people = JSON.parse(localStorage.getItem(`people${this.$route.query.page}`))
            console.log("Данные из локалки")
        } else {
            try {
                const res = await fetch(`http://localhost:3000/?page=${this.$route.query.page}`);
                if (res.status !== 404) {
                    this.people = await res.json();
                    this.savePeople();
                    console.log(res)
               } else {
                   this.message = "HTTP error: " + res.status
                   this.vision = false
               }
            }
            catch(error) {
                this.message = " " + error
            }
        }
    },
}
</script>

<style lang=scss>
@import '@/assets/styles/styles.scss';

.v-catalog {
    &_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
}

</style>