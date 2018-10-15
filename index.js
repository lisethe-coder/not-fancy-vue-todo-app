'use strict';

var app = new Vue({
	el: '#app',
	data: {
		title: 'Todo App !',
		todos: [
		'Drink Tea', 
		'Learn Vue', 
		'Listen to podcast'
		],
		dones: [],
		getDay: function() {
			var now = new Date();
			var day = now.getDay();
			console.log(day);
			let dayName;
				switch(day) {
					case 0: 
						dayName = 'Sunday';
						break;
					case 1:
						dayName = 'Monday';
						break;
					case 2:
						dayName = 'Tuesday';
						break;
					case 3:
						dayName = 'Wednesday';
						break;
					case 4:
						dayName = 'Thursday';
						break;
					case 5:
						dayName = 'Friday';
						break;
					case 6:
						dayName = 'Saturday';
						break;
				}
				return dayName;
		}
	},
	methods: {
		readTodo: function(e) {
			var todo = e.target.value;
			this.todos.push(todo);
			e.target.value = '';
		},
		deleteTodos() {
			this.todos = [];
		},
		addTodo() {
			return;
		}
	}
});
