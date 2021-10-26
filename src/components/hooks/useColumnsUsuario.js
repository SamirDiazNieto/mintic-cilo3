import { useMemo } from "react";

export default function useColumns() {
 const columns = useMemo(
   () => [
    {
      Header: "_id",
      accessor: "_id"
    },
     {
       Header: "Usuario",
       accessor: "nombreUsuario"
     },
     {
       Header: "Rol",
       accessor: "rol"
     },
     {
       Header: "Estado",
       accessor: "estado"
     }
     
     
   ],
   []
 );

 return columns;
}