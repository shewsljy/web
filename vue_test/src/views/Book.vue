<template>
    <div>
        <tr>
            <td>图书编号</td>
            <td>书名</td>
            <td>作者</td>
        </tr>
        <tr v-for="item in books" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.author}}</td>
        </tr>
    </div>
</template>

<script>
    export default {
        name: "Book",
        data() {
            return {
                msg: "Vue Book",
                books: [
                    {
                        id: 1,
                        name: "Vue",
                        author: "123"
                    },
                    {
                        id: 2,
                        name: "Java",
                        author: "456"
                    },
                    {
                        id: 3,
                        name: "Spring",
                        author: "789"
                    }
                ]
            }
        },
        created() {
            axios.get('/book/findAll').then((res)=>{
                this.books = res.data;
                //console.log(res.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
</script>

<style scoped>

</style>
