<template>
    <form>
        <el-input
                placeholder="Please input"
                v-model="title"
                clearable>
        </el-input>
        <el-button type="success" @click="onSubmit">Success</el-button>
    </form>
</template>

<script>
    export default {
        props: {
          itemId: {type: String}
        },
        data() {
            return {
                title: ''
            }
        },
        methods: {
            onSubmit() {
                if (this.title.trim()) {
                    const newItem = {
                        id: this.itemId,
                        title: this.title,
                        completed: false
                    }
                    this.title = ''
                    this.$emit('add-item', newItem)
                }
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
    }

    input {
        width: 400px;
    }
</style>