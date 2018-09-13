let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        return res.status(200).json(books);
    },
    create: (req, res) => {
        const { title, author } = req.body
        books.push({id, title, author})
        id++;
        return res.status(200).json(books);
    },
    update: (req, res) => {
        let index = null;
        books.forEach((book, i) => {
            if(book.id === Number(req.params.id)) index = i;
        });
        books[index] = {
            id: books[index].id,
            title: req.body.title || books[index].title,
            author: req.body.author || books[index.author]
        }
        return res.status(200).json(books)
    },
    delete: (req, res) => {
        let bookIndex = books.findIndex(book => book.id == req.params.id);
        books.splice(bookIndex, 1);
        return res.status(200).json(books);
    }
}