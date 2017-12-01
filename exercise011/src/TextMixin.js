export const TextMixin = {
    data(){
        return{
            text1Exe4: '',
            text2Exe4: ''
        }
    },
    computed: {
        reverseTextComputedMixin(){
            return this.text1Exe4.split('').reverse().join("");
        },
        countTextComputedMixin(){
            return this.text2Exe4 + ' (' + this.text2Exe4.length + ')';
        }
    }
};