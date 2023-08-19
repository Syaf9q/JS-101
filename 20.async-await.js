const users = [
    { id: 1, name: "syafiq" },
    { id: 2, name: "susan" },
    { id: 3, name: "anna" },
];

const articles = [
    { userId: 1, articles: ["one", "two", "three"] },
    { userId: 2, articles: ["four", "five"] },
    { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];

const getData = async (name) => {
    try {
        const user = await getUser(name);
        const articles = await getArticle(user.id);
        console.log(articles);
    } catch (error) {
        console.log(error);
    }
};

function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name);

        if (user) {
            return resolve(user);
        } else {
            return reject(`no name as such ${name}`);
        }
    });
}

function getArticle(userId) {
    return new Promise((resolve, reject) => {
        const userArticle = articles.find((user) => user.userId === userId);

        if (userArticle) {
            return resolve(userArticle.articles);
        } else {
            return reject(`non existant ID`);
        }
    });
}
