const fs = require("fs");

const writeData = (data, destination) => {
    return new Promise((success, fail) => {
        const file = JSON.stringify(data);
        fs.writeFile(`${destination}.json`, file, (err) => {
            if(err) return fail(err)
            return success()
        })
    })
};

const readData = (source) => {
    return new Promise ((success, fail) => {
        fs.readFile(`${source}.json`, "utf-8", (err, data) => {
            if(err) return fail(err)
            const out = JSON.parse(data);
            return success(out)
        })
    })
};


const addBooks = async(id,book, author, year) => {
    try{
        const books = {
            id: id,
            book: book,
            author: author,
            year: year
        }
        let data = await readData("./books")
        data.push(books)
        await writeData(data, "./books");
    }catch(err){
        return (err)
    }
}

const updateBook = async(id, newBookData) => {
    try{
        let data = await readData("./books")
        const editbook = data.find((book) => book.id === id)
        const newBook = {
            ...editbook,
            ...newBookData
        };
        data = data.filter((book) => book.id != id)
        data.push(newBook)
        await writeData(data, "./books")
    }catch(err){
        return err;
    }
}

const removeBook = async (id) => {
    try{
        const data = await readData("./books");
        const out = data.filter((books) => books.id !== id);
        await writeData(out, "./books")
    }catch(err){
        return err;
    }
}

async function books() {
    await addBooks(1, "1984", "George Orwell" ,1949)
    await updateBook(1, {year: 2005})
    await removeBook(1)
}

books()