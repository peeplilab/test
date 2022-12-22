import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersSaga } from '../../actions';
import { Table1 } from '../Table';

class Home extends Component {

  componentDidMount() {
    this.props.getUsersSaga();
  }

  render() {
    const { users } = this.props;
    const queryParams = new URLSearchParams(window.location.search)
    const term = queryParams.get("term")
  
    return (
      <div>
        {users.length > 0
          && (
            <Table1 queryParam={term} data={users} />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersReducer.users
});

const mapDispatchToProps = dispatch => ({
  getUsersSaga: () => dispatch(getUsersSaga())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
