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

    const term = queryParams.get("term");
    const logIdSearchTerm = queryParams.get("LogId");
    const actionType = queryParams.get("actionType")
    const applicationType = queryParams.get("applicationType");
    const applicationID = queryParams.get("applicationID")


    //?LogId=111&ActionType=INITIATE_APPLICATION&ApplicationType=CERT_TITLE_DEED_PLOT&fromDate=2020-03-05&toDate=2022-12-22&ApplicationID=333
    return (
      <div>
        {users.length > 0
          && (
            <Table1 
              logIdSearchTerm={logIdSearchTerm}
              actionType={actionType}
              applicationType={applicationType}
              applicationID={applicationID}
              queryParam={term}
              data={users}
            />
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
