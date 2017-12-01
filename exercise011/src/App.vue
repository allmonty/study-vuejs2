<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->

                <h4>With filters</h4>

                <div class="col-xs-12">
                    <input type="text" v-model="textExe1">
                    <span>{{textExe1 | reverseText}}</span>
                </div>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

                <div class="col-xs-12">
                    <input type="text" v-model="textExe2">
                    <span>{{textExe2 | countWords}}</span>
                </div>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <h4>With computed methods</h4>

                <div class="col-xs-12">
                    <input type="text" v-model="text1Exe3">
                    <span>{{reverseTextComputed}}</span>
                </div>
                <div class="col-xs-12">
                    <input type="text" v-model="text2Exe3">
                    <span>{{countTextComputed}}</span>
                </div>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->

                <h4>With mixin</h4>

                <div class="col-xs-12">
                    <input type="text" v-model="text1Exe4">
                    <span>{{reverseTextComputedMixin}}</span>
                </div>
                <div class="col-xs-12">
                    <input type="text" v-model="text2Exe4">
                    <span>{{countTextComputedMixin}}</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {TextMixin} from './TextMixin.js'

    export default {
        mixins: [TextMixin],
        data(){
            return{
                textExe1: '',
                textExe2: '',
                text1Exe3: '',
                text2Exe3: ''
            }
        },
        filters: {
            reverseText(value){
                return value.split('').reverse().join("");
            }
        },
        computed: {
            reverseTextComputed(){
                return this.text1Exe3.split('').reverse().join("");
            },
            countTextComputed(){
                return this.text2Exe3 + ' (' + this.text2Exe3.length + ')';
            }
        }
    }
</script>

<style>
</style>
