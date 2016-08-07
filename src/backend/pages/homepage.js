/*
*	Homepage
*/

// some imports
import models from '../models/mainModels';

let title = 'Home';

const route = '/';

const get = (req, res) => {
	models.post.find((err, posts) => {
		if(!err) res.render('home', {posts, title});
		else res.status(500);
	});
}

const post = undefined;

module.exports = {
	title,
	route,
	post,
	get
}