import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import SearchForm from "../components/SearchForm";

class Home extends Component {
  state = {
    results: [],
    search: "",
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadUsers();
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  // handleSearchByName = (event) => {
  //   event.preventDefault();
  //   console.log("Hello");
  // };

  handleSortAlphabetically = (event) => {
    event.preventDefault();
    this.setState({
      results: this.state.results.sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      ),
    });
  };

  loadUsers = () => {
    API.getRandomUsers()
      .then((res) =>
        this.setState({
          results: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    const filter = this.state.results.filter((results) =>
      results.name.first.toLowerCase().includes(this.state.search)
    );
    return (
      <div>
        <h1 className="text-center">Employee Directory</h1>

        <SearchForm
          handleSortAlphabetically={this.handleSortAlphabetically}
          handleInputChange={this.handleInputChange}
        ></SearchForm>
        {filter.map((results) => (
          <Card
            firstName={results.name.first}
            lastName={results.name.last}
            email={results.email}
            cell={results.cell}
            image={results.picture.large}
            id={results.id.name}
            key={results.id.value}
          />
        ))}
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay! That Pup Liked You Too!!!
        </Alert>
      </div>
    );
  }
}

export default Home;
