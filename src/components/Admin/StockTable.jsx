import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Divider,
} from "@nextui-org/react";
import { PlusIcon } from "../../components/Admin/Table/PlusIcon";
import { VerticalDotsIcon } from "../../components/Admin/Table/VerticalDotsIcon";
import { SearchIcon } from "../../components/Admin/Table/SearchIcon";
import { ChevronDownIcon } from "../../components/Admin/Table/ChevronDownIcon";
import { capitalize } from "../../components/Admin/Table/utils";
import { fetchAllStocks } from "../../utils/api";

const columns = [
  { name: "CUENTA", uid: "account", sortable: true },
  { name: "TIPO", uid: "type", sortable: true },
  { name: "EMAIL", uid: "email", sortable: true },
  { name: "PASSWORD", uid: "password", sortable: true },
  { name: "ESTADO", uid: "status", sortable: true },
  { name: "PERFILES", uid: "profiles", sortable: true },
  { name: "ACCIONES", uid: "actions" },
];

const INITIAL_VISIBLE_COLUMNS = [
  "account",
  "type",
  "email",
  "password",
  "profiles",
  "status",
  "actions",
];

const statusOptions = [
  { name: "Asignado", uid: "assigned" },
  { name: "Disponible", uid: "available" },
];

export default function App() {
  const [stocks, setStocks] = useState([]);
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "account",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    const loadStocks = async () => {
      const data = await fetchAllStocks();
      setStocks(data);
    };
    loadStocks();
  }, []);

  // Pagination
  const pages = Math.ceil(stocks.length / rowsPerPage);
  const hasSearchFilter = Boolean(filterValue);

  // Filter by status
  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  // Filter items
  const filteredItems = React.useMemo(() => {
    let filteredStocks = [...stocks];
    if (hasSearchFilter) {
      filteredStocks = filteredStocks.filter((stock) =>
        stock.accountId.serviceName
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );
    }
    return filteredStocks;
  }, [stocks, filterValue]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);
  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((stock, columnKey) => {
    switch (columnKey) {
      case "account":
        return (
          <User
            avatarProps={{
              radius: "full",
              size: "md",
              src: stock.accountId.svgUrl,
            }}
            classNames={{
              description: "text-default-500",
            }}
            name={stock.accountId.serviceName}
          />
        );
      case "type":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{stock.type}</p>
          </div>
        );
      case "email":
        return <p>{stock.email}</p>;
      case "password":
        return <p>{stock.password}</p>;
      case "status":
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={stock.isAssigned ? "danger" : "success"}
            size="sm"
            variant="dot"
          >
            {stock.isAssigned ? "Asignado" : "Disponible"}
          </Chip>
        );
        case "profiles":
      return (
        <div className="flex flex-col gap-2">
          {stock.profiles.map((profile, index) => (
            <div key={index} className="text-small">
              <p className="font-medium">Name: {profile.profileName}</p>
              <Divider />
              <p className="text-default-400">Code: {profile.profilePassword}</p>
            </div>
          ))}
        </div>
      );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="dark border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>Ver</DropdownItem>
                <DropdownItem>Editar</DropdownItem>
                <DropdownItem>Eliminar</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return stock[columnKey];
    }
  }, []);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="dark flex gap-3">
            <Dropdown className="dark">
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="dark"> 
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className="dark"
              endContent={<PlusIcon />}
              size="sm"
            >
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {stocks.length} stocks
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    stocks.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "cursor-pointer",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-w-9xl","left-0","right-0","mx-auto"],
      th: ["text-default-500", "border-b", "border-divider"],
      td: [
        "border-b", 
        "border-divider",
        "py-2", 
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        "group-data-[middle=true]:before:rounded-none",
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <Table
      isCompact
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
 
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No stock found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
