import { useState } from 'react'

export default function AppMain() {
    const initialArticles = [
        "Article's title 1",
        "Article's title 2",
        "Article's title 3",
        "Article's title 4"
    ]

    const [articles, setArticles] = useState(initialArticles)
    const [newArticles, setNewArticles] = useState("")

    /* add an article */
    function addArticle(e) {
        e.preventDefault()
        setArticles([
            ...articles,
            newArticles
        ])
    }

    /* remove an article */
    function handleTrashArticleClick(e) {
        const dataIndex = e.target.getAttribute("data-index")
        const newArticles = articles.filter((article, index) => dataIndex != index)
        setArticles(newArticles)
    }
    return (
        <main>
            <form onSubmit={addArticle}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Add an article's title</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Article's title"
                            aria-label="Article's title"
                            aria-describedby="button-addon2"
                            value={newArticles}
                            onChange={e => setNewArticles(e.target.value)}
                        />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
                    </div>
                    <small id="articleHelperId" className="form-text text-muted">Your article's titles</small>
                </div>
            </form>

            <ul className="list-group">
                {articles.map((article, index) =>
                    <li key={index} className="list-group-item d-flex justify-content-between">{article}
                        <button className="btn-trash" data-index={index} onClick={handleTrashArticleClick}>
                            DELETE
                        </button>
                    </li>
                )}
            </ul>
        </main>
    )
}


