export interface PagedResultSet {

    pagedNumber:number;
    totalRecords:number;
    totalPages:number;
    pageSize:number;

    hasPreviousPage:boolean;
    hasNextPage:boolean;

    pagedData:object;
}
