module.exports = {
	path: '/',
	render: function(req, res) {
		var htmlForBUI = '<h1>BUI</h1><p>BUI endpoints:</p>';
		res.status(200).send(htmlForBUI);
	}
};
