new Vue({
        el: '#exercise',
        data: {
            value: 0,
            duration: 5000,
            canErase: true
        },
        computed: {
        	result: function() {
        		return this.value == 37 ? 'done' : 'not there yet';
        	}
        },
        watch: {
        	value: function() {
        		vm = this;
        		if(this.canErase){
	        		this.canErase = false;
	        		setTimeout(function(){
	        			vm.value = 0;
	        			vm.canErase = true;
	        		}, this.duration);
        		}
        	}
        }
    });