<template>
    <div>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <input type="text" class="form-control" placeholder="First Name" v-model.lazy="userData.firstName">
        </div>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <input type="text" class="form-control" placeholder="Last Name" v-model.lazy="userData.lastName">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data(){
            return {
                userData: {
                    firstName: this.value.firstName,
                    lastName: this.value.lastName
                }
            }
        },
        watch: {
            userData: {
                handler(val){
                    console.log("oi: " + val)
                    this.$emit('input', this.userData)
                },
                deep: true
            }
        }
    }
</script>

<style>
</style>
