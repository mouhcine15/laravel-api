<template>
    <div class="container">
        <h1 class="text-center">Boolpress</h1>
        <div class="row g-2">
            <div v-for="post in posts" :key="post.id" class="col-sm-6 col-md-4">
                <div class="card h-100">
                    <img :src="post.image" class="card-img-top" alt="">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{{post.title}}</h5>
                        <p class="card-text mb-auto">{{post.excerpt}}</p>
                        <a :href="baseUrl + '/posts/' + post.slug" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',


    data() {
        return {
            baseUrl: window.location.origin,
            posts: []
        }
    },
    created() {
        axios.get('http://localhost:8000/api/posts')
            .then(res => {
                this.posts = res.data.response.data;
                console.log(res);
            })
            .catch(error => console.log('errore!!!!'))
    }
}
</script>

<style lang="scss" scoped>
    @import 'bootstrap/scss/bootstrap';
</style>