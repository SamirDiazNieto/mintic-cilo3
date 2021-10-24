import { useMemo } from "react";

export default function useRows(data) {
 const rows = useMemo(
   () => data
 );

 return rows;
}