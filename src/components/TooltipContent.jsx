import React from "react";
const {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableContainer,
  Paper,
} = require("@material-ui/core");

const getLabel = (cell) => {
  if (cell.isPath) {
    return "Optimal Path";
  } else if (cell.isClosed) {
    return "Considered for the optimal path";
  } else {
    return "Computed but never considered";
  }
};
const TooltipContent = ({ cell }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>{getLabel(cell)}</Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography>Distance from Start</Typography>
              </TableCell>
              <TableCell>
                <Typography>{cell.gCost}</Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography>Distance from End</Typography>
              </TableCell>
              <TableCell>
                <Typography>{cell.hCost}</Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography>Sum of the Two</Typography>
              </TableCell>
              <TableCell>
                <Typography>{cell.fCost}</Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography>Steps to reach</Typography>
              </TableCell>
              <TableCell>
                <Typography>{cell.counter}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TooltipContent;
