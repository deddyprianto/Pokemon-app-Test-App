import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { SelectorIcon } from "@heroicons/react/outline";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

const Table = ({ data }) => {
  const { SearchBar } = Search;
  const columns = [
    {
      dataField: "id",
      text: "No",
      headerFormatter: (column, colIndex, components) => (
        <div className="flex w-full justify-center items-center ">
          <h1>{column.text}</h1>
          <SelectorIcon className="w-5 h-5 text-gray-400" />
        </div>
      ),
      sort: true,
      classes: "text-center",
    },
    {
      dataField: "first_name",
      text: "First Name",
      headerFormatter: (column, colIndex, components) => (
        <div className="flex w-full justify-start items-center ">
          <h1>{column.text}</h1>
          <SelectorIcon className="w-5 h-5 text-gray-400" />
        </div>
      ),
      sort: true,
    },
    {
      dataField: "last_name",
      text: "Last Name",
      headerFormatter: (column, colIndex, components) => (
        <div className="flex w-full justify-start items-center ">
          <h1>{column.text}</h1>
          <SelectorIcon className="w-5 h-5 text-gray-400" />
        </div>
      ),
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      headerFormatter: (column, colIndex, components) => (
        <div className="flex w-full justify-start items-center ">
          <h1>{column.text}</h1>
          <SelectorIcon className="w-5 h-5 text-gray-400" />
        </div>
      ),
      sort: true,
    },
  ];
  const loading = [
    {
      id: "The Most Recent Page",
    },
  ];

  return (
    <ToolkitProvider
      keyField="id"
      data={data.length === 0 ? loading : data}
      columns={columns}
      search={{
        searchFormatted: true,
      }}
    >
      {(props) => (
        <div>
          <div className="w-full mb-6 mt-3 ">
            <SearchBar
              {...props.searchProps}
              placeholder="Type here & search your data..."
              srText=""
              className=" focus:border-sky-500 rounded mt-2 text-gray-500 border-gray-200 border outline-none w-1/3 h-10 pl-2 font-popins ml-2"
            />
          </div>
          <hr className="w-full bg-gray-100" style={{ height: "1px" }} />
          <BootstrapTable
            {...props.baseProps}
            rowClasses="h-20"
            classes="w-full"
            headerClasses="h-14 bg-sky-100  font-popins text-[13px] !font-semibold"
            bodyClasses="divide-y text-gray-700 font-popins !font-normal"
          />
        </div>
      )}
    </ToolkitProvider>
  );
};

export default Table;
