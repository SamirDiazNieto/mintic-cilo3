import { useMemo } from "react";

export default function useColumns() {
 const columns = useMemo(
   () => [
    {
      Header: "_id",
      accessor: "_id"
    },
     {
       Header: "nombreUsuario",
       accessor: "nombreUsuario"
     },
     {
       Header: "estado",
       accessor: "estado"
     },
     {
       Header: "rol",
       accessor: "rol"
     }
     
   ],
   []
 );

 return columns;
}