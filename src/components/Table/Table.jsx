
import "./Table.css";
import { MaterialReactTable } from "material-react-table";

const TableBase = ({ data, columns }) => {
  return (
    <div className="table-container">
     <MaterialReactTable
      columns={columns}
      data={data}
      muiTablePaginationProps={{
        rowsPerPageOptions: [5, 10],
        showFirstButton: false,
        showLastButton: false,
      }}
      enableStickyHeader
      muiTableContainerProps={{ sx: { maxHeight: '500px' } }}
    />
    </div>
  );
};

export default TableBase;
