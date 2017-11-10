
new Vue({
  el: '#exercise',
  data: {
  	effectClass: "",
  	greenBorderClass: "green-border",

  	task3_userInputedClass: "",
  	
  	task4_resultClass: "",
  	task4_userInputedClass: "",
  	task4_userInputedDecision: "",

  	task5_userinputedStyles: "",

  	task6_progressStyle: "",
  	task6_progressWidth: 0
  },
  methods: {
    startEffect: function() {
    	this.effectClass == "highlight";
    	let vm = this;
    	setInterval(function(){
			vm.effectClass = vm.effectClass == "highlight" ? "shrink" : "highlight";
		}, 1000);
    },
    startProgress: function() {
    	let vm = this;
    	setInterval(function(){
    		vm.task6_progressWidth ++;
    		if(vm.task6_progressWidth > 100) vm.task6_progressWidth = 0;
    		
			vm.task6_progressStyle = "width: " + vm.task6_progressWidth + "px";
		}, 100);
    }
  },
  watch: {
  	task4_userInputedDecision: function(){
  		if(this.task4_userInputedDecision == "true")
  			this.task4_resultClass = this.task4_userInputedClass + " tall";
  		else
  			this.task4_resultClass = this.task4_userInputedClass;
  	}
  }
});
