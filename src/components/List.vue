<template>
    <div>
        <ul>
            <TodoItem
                    v-for="item of items" :key="item.id"
                    v-bind:item="item"
                    v-on:remove-list-item="removeItem"
            />
        </ul>
    </div>
</template>

<script>
    import ListItem from '@/components/ListItem'

    export default {
        props: ['items'],
        components: {
            TodoItem: ListItem
        },
        methods: {
            removeItem(id) {
                this.$emit('remove-list-item', id)
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

</style>