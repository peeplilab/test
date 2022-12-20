import React from 'react'
import { connect } from 'react-redux'
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

export const Table1 = (props) => {
  const defaultMaterialTheme = createTheme();
  //const { tableData } = props;
  console.log(props.data, 'ffff');
  let dataToMap = props.data.length > 0 ? props.data.map((e) => {
    console.log(e, 'ddd')
    return {
      logId: e.logId,
      applicationType: e.applicationType,
      applicationId: e.applicationId,
      actionType: e.actionType,
      logInfo: e.logInfo,
      creationTimestamp: e.creationTimestamp,
    }

  }) : ''
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        title="Logger Application"
        columns={[
          { title: 'Log ID', field: 'logId', filterPlaceholder: 'Search Log ID', type: 'numeric' },
          {
            title: 'Application Type', field: 'applicationType',
            lookup: {
              LEASE_CLOSURE: 'LEASE_CLOSURE',
              ADD_COMPANY_EMPLOYEE: 'ADD_COMPANY_EMPLOYEE',
            },
            filterPlaceholder: 'Select Application Type'
          },
          { title: 'Application ID', field: 'applicationId', filterPlaceholder: 'Search Application ID' },
          {
            title: 'Action', field: 'actionType', lookup: {
              INITIATE_APPLICATION: 'INITIATE_APPLICATION',
              SUBMIT_APPLICATION: 'SUBMIT_APPLICATION',
              ADD_EMPLOYEE: 'ADD_EMPLOYEE'
            }, filterPlaceholder: 'Select Action'
          },
          { title: 'Action Details', field: 'logInfo', filterPlaceholder: 'Search Action', sorting: false },
          { title: 'Date : Time', field: 'creationTimestamp', type: 'datetime' },

        ]}
        data={dataToMap}
        options={{
          filtering: true
        }}
      />
    </ThemeProvider>

  )
}


const mapStateToProps = (state) => ({
  tableData: state.usersReducer
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Table1)