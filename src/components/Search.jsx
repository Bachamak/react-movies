/** @format */

import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className='input'>
                <input
                    placeholder='Search...'
                    type='search'
                    className='validate'
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.handleKey}
                />
                <button
                    onClick={() =>
                        this.props.searchMovies(
                            this.state.search,
                            this.state.type
                        )
                    }
                >
                    Search
                </button>
                <div className='search-label'>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='All'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Search;
