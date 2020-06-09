<template>
    <li>
        <span v-bind:class="{done: item.completed}">
            <input type="checkbox" v-on:change="item.completed = !item.completed">
            <strong>{{item.id}}</strong>
            {{item.title | uppCase}}
        </span>
        <button class="rm" v-on:click="$emit('remove-list-item', item.id)">
            &times;
        </button>
    </li>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        filters: {
          uppCase(value) {
              return value.toUpperCase()
          }
        }
    }
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    input {
        margin-right: 1rem;
    }

    .rm {
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
        align-self: center;
    }

    .done {
        text-decoration: line-through;
    }
</style>
