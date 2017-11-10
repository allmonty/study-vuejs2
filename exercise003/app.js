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
	        			console.log('hi');
	        			vm.value = 0;
	        			this.canErase = true;
	        		}, this.duration);
        		}
        	}
        }
    });