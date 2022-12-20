import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/searchbox/search-box.component.jsx";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            artists: [
                { name: "Shawn Mendes", id: "1" },
                { name: "Dua Lipa", id: "2" },
                { name: "Charlie Puth", id: "3" },
                { name: "Taylor Swift", id: "4" },
                { name: "Harry Styles", id: "5" },
                { name: "Sam Smith", id: "6" },
                { name: "Miley Cyrus", id: "7" },
                { name: "Justin Timberlake", id: "8" },
            ],
            searchStr: "",
        };

        // Setting this to point to App class for handleChange()
        // this.handleChange = this.handleChange.bind(this);
    }

    // When component is rendered onto DOM
    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => response.json())
    //         .then((user) => this.setState({ artists: user }));
    // }

    // Personal Class Method to handle an event
    handleChange = (event) => {
        this.setState({ searchStr: event.target.value });
    };

    render() {
        // Filtering Singers
        const { artists, searchStr } = this.state;
        const filteredSingers = artists.filter((singer) =>
            singer.name.toLowerCase().includes(searchStr.toLowerCase())
        );
        return (
            <div className="App">
                {/* Heading */}
                <h1>My Favourite Singers</h1>
                {/* Search Box Component */}
                <SearchBox
                    placeholder="Search singers..."
                    handleChange={this.handleChange}
                />
                {/* Card List Component to display cards in 4 columns */}
                <CardList artists={filteredSingers}></CardList>
            </div>
        );
    }
}

export default App;
