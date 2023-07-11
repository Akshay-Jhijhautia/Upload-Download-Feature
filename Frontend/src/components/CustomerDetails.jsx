import {
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const CustomerDetails = ({ customerData }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "50px",
          "& > :not(style)": {
            m: 1,
            width: "80%",
            height: "auto",
          },
        }}
      >
        <Paper elevation={3}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">S.no</TableCell>
                  <TableCell align="left">Customer Name</TableCell>
                  <TableCell align="left">Relationship Manager Name</TableCell>
                  <TableCell align="left">Loan Amount</TableCell>
                  <TableCell align="left">Documents Submitted</TableCell>
                  <TableCell align="left">Documents Reviewed</TableCell>
                  <TableCell align="left">Loan Disbursed</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customerData.data &&
                  customerData.data.map((customer, index) => (
                    <>
                      <TableRow
                        key={customer.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left">{index + 1}</TableCell>
                        <TableCell align="left">
                          {customer.Customer_Name}
                        </TableCell>
                        <TableCell align="left">
                          {customer.Relationship_Manager_Name}
                        </TableCell>
                        <TableCell align="left">
                          {customer.Loan_Amount}
                        </TableCell>
                        <TableCell align="left">
                          {customer.Documents_Submitted}
                        </TableCell>
                        <TableCell align="left">
                          {customer.Documents_Reviewed}
                        </TableCell>
                        <TableCell align="left">
                          {customer.Loan_Disbursed}
                        </TableCell>
                      </TableRow>
                    </>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
};

export default CustomerDetails;
