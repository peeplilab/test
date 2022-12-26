import React from 'react'
import { connect } from 'react-redux'
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
//import { useQueryParam } from '../lib/queryParam';
//import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import { handleClickFilter, setApplicationType,setActionType } from '../actions';

export const Table1 = (props) => {
  const defaultMaterialTheme = createTheme();
  //const { tableData } = props;
  const [applicationType, setApplicationType1] = React.useState('');
  const [action, setAction] = React.useState('');
  const [filteredArr, setFilteredArr] = React.useState([]);
  const [filterPressedStatus, setFilterPressedStatus] = React.useState(false);

  const handleChange = (event) => {
    setApplicationType1(event.target.value);
  };
  const handleChangeAction = (event) => {
    setAction(event.target.value);
  };
  const handleClickFilter = (event) => {
    var filter = {
      applicationType: applicationType,
      actionType: action
    };
    let newArr = props.data.filter(obj => obj.applicationType === filter.applicationType && obj.actionType === filter.actionType)
    //console.log(newArr, 'gggg');
    setFilterPressedStatus(true)
    setFilteredArr(newArr);
  };
  const handleClearFilter = (event) => {
    // var filter = {
    //   applicationType: applicationType,
    //   actionType: action
    // };
    // let newArr = props.data.filter(obj => obj.applicationType == filter.applicationType && obj.actionType == filter.actionType)
    //console.log(newArr, 'gggg');
    setFilterPressedStatus(false)
   // setFilteredArr(newArr);
  };


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
  // let filteredArrData = props.data.filter(function (item) {
  //   for (var key in filter) {
  //     if (item[key] === undefined || item[key] != filter[key])
  //       return false;
  //   }
  //   return true;
  // });


  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        title="Logger Application"
        isLoading={dataToMap.length > 0 ? false : true}
        columns={[
          {
            title: 'Log ID',
            field: 'logId',
            filterPlaceholder: 'Search Log ID',
            defaultFilter: props.logIdSearchTerm
          }

          ,
          {
            title: 'Application Type', field: 'applicationType',
            filterComponent: props => {
              return (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"> Application Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={applicationType}
                    label="Select Application Type"
                    onChange={handleChange}
                  >
                    <MenuItem value={'LEASE_CLOSURE'}>LEASE_CLOSURE</MenuItem>
                    <MenuItem value={'ADD_COMPANY_EMPLOYEE'}>ADD_COMPANY_EMPLOYEE</MenuItem>
                    <MenuItem value={'CERT_TITLE_DEED_PLOT'}>CERT_TITLE_DEED_PLOT</MenuItem>
                    <MenuItem value={'ADD_POA'}>ADD_POA</MenuItem>
                    <MenuItem value={'ADD_COMPANY'}>ADD_COMPANY</MenuItem>
                    <MenuItem value={'CERT_PROP_OWNERSHIP'}>CERT_PROP_OWNERSHIP</MenuItem>
                  </Select>
                </FormControl>
              )
            },

            filterPlaceholder: 'Select Application Type'
          },
          {
            title: 'Application ID',
            field: 'applicationId',
            filterPlaceholder: 'Search Application ID',
            defaultFilter: props.applicationID

          },
          {
            title: 'Action', field: 'actionType',
            filterComponent: props => {
              return (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Action Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={action}
                    label="Select Action Type"
                    onChange={handleChangeAction}
                  >
                    <MenuItem value={'INITIATE_APPLICATION'}>INITIATE_APPLICATION</MenuItem>
                    <MenuItem value={'SUBMIT_APPLICATION'}>SUBMIT_APPLICATION</MenuItem>
                    <MenuItem value={'ADD_EMPLOYEE'}>ADD_EMPLOYEE</MenuItem>
                    <MenuItem value={'DARI_REFRESH_TOKEN'}>DARI_REFRESH_TOKEN</MenuItem>
                    <MenuItem value={'DARI_APP_LOGIN'}>DARI_APP_LOGIN</MenuItem>
                  </Select>
                </FormControl>
              )
            }
            , filterPlaceholder: 'Select Action'
          },
          { title: 'Action Details', field: 'logInfo', filtering: false },
          {
            title: 'Date : Time',
            field: 'creationTimestamp',
            type: 'datetime',
            filterComponent: props => {
              return (
                <div>
                  <Stack spacing={1} direction="row">

                    {/* <MaterialUIPicker />
                    <MaterialUIPicker /> */}

                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        handleClearFilter();
                      }}

                    >Reset
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => {
                        handleClickFilter();
                      }}

                    >Filter
                    </Button>
                  </Stack>
                </div>
              )
            }
          },
        ]}
        data={filterPressedStatus ? filteredArr : dataToMap}
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

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Table1)