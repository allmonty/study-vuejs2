<!-- Exercise 1 -->
<!-- Create a Signup Form where you retrieve the following Information -->
<!-- Full Name (First Name + Last Name) -->
<!-- Mail -->
<!-- Password -->
<!-- Store Data? Yes/No -->

<!-- Exercise 2 -->
<!-- Only display the Form if it has NOT been submitted -->
<!-- Display the Data Summary ONCE the Form HAS been submitted -->

<!-- Exercise 3 -->
<!-- Edit the Example from above and create a custom "Full Name" Control -->
<!-- which still holds the First Name and Last Name Input Field -->
<template>
    <div class="container">
        <form>
            <div class="row" v-if="!isFormSubmitted">
                <app-full-name v-model="userData.name"></app-full-name>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <input type="text" class="form-control" placeholder="E-mail" v-model.lazy="userData.email">
                </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <input type="password" class="form-control" placeholder="Password" v-model.lazy="userData.password">
                </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" v-model.lazy="willStoreData"> Store data?
                        </label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button class="btn btn-default" type="submit" @click.prevent="submit">Send</button>
                </div>
            </div>
        </form>
        <!-- <hr> -->
        <div class="row" v-if="isFormSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userData.name.firstName}} {{userData.name.lastName}}</p>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Store in Database?: {{willStoreData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullNameCmp from "./FullNameCmp.vue"

    export default {
        data(){
            return {
                userData: {
                    name: {
                        firstName: '',
                        lastName: ''
                    },
                    mail: '',
                    password: '',
                },
                willStoreData: false,
                isFormSubmitted: false
            }
        },
        methods: {
            submit(){
                this.isFormSubmitted = true;
            }
        },
        components:{
            appFullName: FullNameCmp
        }
    }
</script>

<style>
    .container{
        padding: 15px;
    }
</style>
