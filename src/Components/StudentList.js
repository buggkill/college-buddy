import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Button,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from '@mui/material';
// import { Search as SearchIcon } from '../../icons/search';`

// import { useRouter } from "next/router";
// import { SeverityPill } from '../severity-pill';

export const StudentList = ({ vans, ...rest }) => {
  const [selectedVansIds, setSelectedVansIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [filteredVans, setFilteredVans] = useState(vans)

console.log("vans====>>>>>",vans)




  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    console.log("New page is ========>>>>>", newPage)
    setPage(newPage);
  };

  const onEditClick = (user) =>{
    console.log("the user is ",user)

  }




  return (

    <>

    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedVansIds.length === vans.length}
                    color="primary"
                    indeterminate={
                      selectedVansIds.length > 0
                      && selectedVansIds.length < vans.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell> */}
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                  Van Number
                </TableCell>
                {/* <TableCell>
                  Geocode
                </TableCell> */}
                <TableCell>
                  Created On
                </TableCell>

                {/* <TableCell>
                  Status
                </TableCell> */}

                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredVans.slice(page*limit, (page+1)*limit).map((van) => (
                <TableRow
                  hover
                  key={van.id}
                  selected={selectedVansIds.indexOf(van.id) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedVansIds.indexOf(van.id) !== -1}
                      onChange={(event) => handleSelectOne(event, van.id)}
                      value="true"
                    />
                  </TableCell> */}
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >

                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {van.Id}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {van.VanNumber}
                  </TableCell>
                  <TableCell>
                    {/* {format(van.CreatedOn, 'dd/MM/yyyy')} */}
                    {van.CreatedOn}
                  </TableCell>

                  {/* <TableCell>
                  <SeverityPill
                    color={(van.IsActive === 1 && 'success')
                    || (van.IsActive === 0 && 'error')
                    || 'warning'}
                  >
                    {van.IsActive === 1 ? "Active" : "Not Active"}
                  </SeverityPill>
                </TableCell> */}

                  <TableCell>
                    <Button onClick={()=>{
                      //  onEditClick(van),
                        console.log(van)}}>Edit</Button>
                    </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={filteredVans.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>

    </>
  );
};

StudentList.propTypes = {
  vans: PropTypes.array.isRequired
};
