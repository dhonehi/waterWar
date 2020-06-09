<template>
    <div v-loading="loading">
        <a href="/">Home</a>
        <Additem @add-item="addItem"
                 :itemId="items.length + 1"/>
        <hr>
        <TodoList
                v-if="items.length"
                :items="items"
                @remove-list-item="removeItem"
        />
        <p v-else>Not Items</p>
    </div>
</template>

<script>
    import TodoList from '@/components/List'
    import Additem from '@/components/AddItem'

    export default {
        name: 'App',
        mounted() {
            this.loadData()
        },
        data() {
            return {
                items: [],
                loading: true,
            }
        },
        components: {
            TodoList, Additem
        },
        methods: {
            removeItem(id) {
                this.items = this.items.filter(t => t.id !== id)
            },
            addItem(item) {
                this.items.push(item)
            },
            loadData: async function () {
                try {
                    const response = await this.$http.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
                    setTimeout(() => {
                        this.items = response.data
                        this.loading = false
                        this.$notify({
                            title: 'Success',
                            message: 'This is a success message',
                            type: 'success'
                        });
                    }, 2000)

                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>