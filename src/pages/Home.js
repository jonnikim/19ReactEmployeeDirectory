import React, { Component } from "react";
import API from "../utils/API";
import CardHeader from "../components/CardHeader";
import SearchForm from "../components/SearchForm";
import Wrapper from "../components/Wrapper";

class Home extends Component {
  state = {
    results: [],
    search: "",
    ascending: "",
  };

  componentDidMount() {
    this.loadUsers();
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };
  handleSort = (event) => {
    event.preventDefault();
    const { ascending } = this.state;
    if (ascending === false || ascending === "") {
      this.handleSortAlphabetically();
    } else if (ascending === true) {
      this.handleSortAlphabeticallyReverse();
    }
    return;
  };
  handleSortAlphabetically = () => {
    this.setState({
      results: this.state.results.sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      ),
      ascending: true,
    });
  };

  handleSortAlphabeticallyReverse = () => {
    this.setState({
      results: this.state.results.sort((a, b) =>
        b.name.first.localeCompare(a.name.first)
      ),
      ascending: false,
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
      <Wrapper>
        <div>
          <h1 className="text-center">Employee Directory</h1>

          <SearchForm
            handleSort={this.handleSort}
            handleInputChange={this.handleInputChange}
          ></SearchForm>

          <CardHeader results={filter}></CardHeader>
          {/* {filter.map((results) => (
          <Card
            results={filter}
            firstName={results.name.first}
            lastName={results.name.last}
            email={results.email}
            cell={results.cell}
            image={results.picture.large}
            id={results.id.name}
            key={results.id.value}
          />
          ))} */}
        </div>
      </Wrapper>
    );
  }
}

export default Home;
