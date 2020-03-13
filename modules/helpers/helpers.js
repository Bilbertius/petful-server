
const helpers = {
	
	display : function(queue) {
		if (queue.first === null) {
			return
		}
		let current = queue.last;
		while (current !== null) {
			console.log(current.data);
			current = current.next
		}
	},

	peek : function(queue) {
		if (queue.first === null) {
			return null
		}
		return queue.first.data
	},

	isEmpty : function(queue) {
	return peek(queue) === null;
	}
}
module.exports = helpers;