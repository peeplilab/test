import React from 'react'
import { connect } from 'react-redux'
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
//import { useQueryParam } from '../lib/queryParam';

export const Table1 = (props) => {
  const defaultMaterialTheme = createTheme();
  //const { tableData } = props;
  let dataToMap = props.data.length > 0 ? props.data.map((e) => {
    return {
      logId: e.logId,
      applicationType: e.applicationType,
      applicationId: e.applicationId,
      actionType: e.actionType,
      logInfo: '',
      creationTimestamp: e.creationTimestamp,
    }

  }) : ''
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        title="Logger Application"
        isLoading={dataToMap.length > 0 ? false : true}
        columns={[
          { title: 'Log ID', field: 'logId', filterPlaceholder: 'Search Log ID' },
          {
            title: 'Application Type', field: 'applicationType',
            lookup: {
              LEASE_CLOSURE: 'LEASE_CLOSURE',
              ADD_COMPANY_EMPLOYEE: 'ADD_COMPANY_EMPLOYEE',
              CERT_TITLE_DEED_PLOT: 'CERT_TITLE_DEED_PLOT',
              ADD_POA: 'ADD_POA',
              ADD_COMPANY: 'ADD_COMPANY',
              CERT_PROP_OWNERSHIP: 'CERT_PROP_OWNERSHIP',

            },
            filterPlaceholder: 'Select Application Type'
          },
          { title: 'Application ID', field: 'applicationId', filterPlaceholder: 'Search Application ID' },
          {
            title: 'Action', field: 'actionType', lookup: {
              INITIATE_APPLICATION: 'INITIATE_APPLICATION',
              SUBMIT_APPLICATION: 'SUBMIT_APPLICATION',
              ADD_EMPLOYEE: 'ADD_EMPLOYEE',
              DARI_REFRESH_TOKEN: 'DARI_REFRESH_TOKEN',
              DARI_APP_LOGIN: 'DARI_APP_LOGIN'
            }, filterPlaceholder: 'Select Action'
          },
          { title: 'Action Details', field: 'logInfo', filterPlaceholder: 'Search Action', sorting: false },
          { title: 'Date : Time', field: 'creationTimestamp', type: 'datetime' },

        ]}
        data={dataToMap}
        options={{
          filtering: true,
          pageSize: 10,
          searchText: props.queryParam
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