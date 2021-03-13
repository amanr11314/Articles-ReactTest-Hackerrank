import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

const sortByUpvotes = (articles) => [...articles].sort(function (a, b) {
    const keyA = a.upvotes;
    const keyB = b.upvotes;
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
});

const sortByLatestDate = (articles) => [...articles].sort(function (a, b) {
    const keyA = new Date(a.date);
    const keyB = new Date(b.date);
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
});

function App(props) {
    const [my_articles, sortArticles] = useState(sortByUpvotes(props.articles));
    return (
        <div className="App">
            <h8k-navbar header={title}/>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link"
                        className="small"
                        onClick={
                            () => sortArticles(
                                sortByUpvotes(props.articles)
                            )
                        }
                >
                    Most Upvoted
                </button>
                <button
                    data-testid="most-recent-link"
                    className="small"
                    onClick={
                        () => sortArticles(
                            sortByLatestDate(props.articles)
                        )
                    }
                >
                    Most Recent
                </button>
            </div>
            <Articles articles={my_articles}/>
        </div>
    );

}

export default App;
