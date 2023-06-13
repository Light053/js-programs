const posts = [
	{ id: 1, info: "фото собаки" },
	{ id: 1, info: "фото пса" },
	{ id: 2, info: "фото кота" },
	{ id: 3, info: "фото семьи" },
	{ id: 4, info: "фото парня" },
	{ id: 5, info: "фото девушки" },
	{ id: 6, info: "фото космоса" },
	{ id: 7, info: "фото ПК" },
];

const comments = [
	{ id: 1, comment: "Милая собака" },
	{ id: 1, comment: "красивая собака" },
	{ id: 2, comment: "Милый кот" },
	{ id: 3, comment: "Милая семья" },
	{ id: 4, comment: "Милый парень" },
	{ id: 5, comment: "Милая девушка" },
	{ id: 6, comment: "Невероятный космос" },
	{ id: 7, comment: "Топовый ПК" },
];

/**
 * Функция получает пост по указанному идентификатору.
 * @param {number} postId - Идентификатор поста.
 * @param {Array} posts - Массив постов.
 * @returns {Promise<Array>|string} - Результат выполнения операции или сообщение об ошибке.
 */
async function getPost(postId, posts) {
	try {
		const filteredPosts = posts.filter(post => post.id === postId);
		await new Promise(resolve => setTimeout(resolve, 300)); // Имитация задержки в 300 миллисекунд
		if (postId > posts[posts.length - 1].id) {
			return "Неправильный айди!";
		}
		return filteredPosts;
	} catch (e) {
		console.log(e.message);
	}
}

/**
 * Функция получает комментарии по указанному идентификатору.
 * @param {number} commId - Идентификатор комментария.
 * @returns {Promise<Array>|string} - Результат выполнения операции или сообщение об ошибке.
 */
async function getComment(commId) {
	try {
		if (commId > posts[posts.length - 1].id) {
			return "Неправильный айди комментария!";
		}
		const filteredComments = comments.filter(comm => comm.id === commId);
		await new Promise(resolve => setTimeout(resolve, 400)); // Имитация задержки в 400 миллисекунд
		return filteredComments;
	} catch (e) {
		console.log(e.message);
	}
}

/**
 * Функция загружает комментарии для указанного поста.
 * @param {number} id - Идентификатор поста.
 * @returns {Promise<Object>|string} - Результат выполнения операции или сообщение об ошибке.
 */
async function loadCommentsForPost(id) {
	try {
		if (id > posts[posts.length - 1].id) {
			return "Неправильный айди поста!";
		}
		const post = await getPost(id, posts);
		await new Promise(resolve => setTimeout(resolve, 500)); // Имитация задержки в 500 миллисекунд

		const postId = post[0].id;
		const comm = await getComment(postId);
		const commentPost = {
			post: post[0].info,
		};

		for (let i = 0; i < comm.length; i++) {
			let comment = "comment" + Number(i + 1);
			commentPost[comment] = comm[i].comment;
		}
		return commentPost;
	} catch (e) {
		console.log("ошибка в функции loadCommentsForPost: " + e.message);
	}
}

/**
 * Функция загружает комментарии для массива постов.
 * @param {Array} arr - Массив идентификаторов постов.
 * @returns {Promise<Array>} - Результат выполнения операции.
 */
async function morePosts(arr) {
	return postsWithComments = Promise.all(arr.map(num => loadCommentsForPost(num)));
}

// Загрузка комментариев для указанных постов
morePosts([7, 2, 3, 1, 5, 10, 6, 7, 4, 2, 1, 5, 7, 4, 1, 2, 3, 5, 7, 5, 2, 5, 7, 1, 2, 3, 5, 6, 7])
	.then(result => console.log(result));

// Загрузка комментариев для поста с идентификатором 9
loadCommentsForPost(9)
	.then(result => console.log(result));
