<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-onward:click="print">Test</button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            print(){
                console.log('printed');
            }
        },
        directives:{
            'onward': {
                bind(el, binding, vnode){
                    if(typeof binding.value === 'function')
                        el.addEventListener(binding.arg, binding.value);
                }
            }
        }
    }
</script>

<style>
</style>
