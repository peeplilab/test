import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { getUsersSaga } from '../../actions';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { Link } from 'react-router-dom'
import { Table1 } from '../Table';
import MaterialTable from 'material-table';

class Home extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getUsersSaga();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        {users.length > 0
          && (
            <Table1 data={users} />
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
