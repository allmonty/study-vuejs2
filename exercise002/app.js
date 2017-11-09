new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
        	doAlert(){
        		alert("Alert! Alert! Alert!");
        	},
        	storeValue(event){
        		this.value = event.target.value;
        	}
        }
    });