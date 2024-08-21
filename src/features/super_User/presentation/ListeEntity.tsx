import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { IoMdTrash } from "react-icons/io"
import { FaEdit } from "react-icons/fa"

  export function ListeEntities () {
    return(
        <Table>
        <TableCaption>A list of Entities subscriber.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Company</TableHead>
            <TableHead>Membre depuis</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Admin</TableHead>
            <TableHead className="text-right">Délai licence</TableHead>
            <TableHead className="text-right w-[4vw]">Modification</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">ENT001</TableCell>
            <TableCell>20/06/2021</TableCell>
            <TableCell>Big society</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell className="text-right">40 jours</TableCell>
            <TableCell className="flex w-full justify-between">
              <FaEdit className="h-7 w-7 hover:text-cyan-300 dark:text-cyan-300/70"/>
              <IoMdTrash className="h-7 w-7 hover:text-cyan-300 dark:text-cyan-300/70"/>
            </TableCell>
          </TableRow>
          {/* exemple*/}
          <TableRow>
            <TableCell className="font-medium">ENT002</TableCell>
            <TableCell>15/07/2021</TableCell>
            <TableCell>Small company</TableCell>
            <TableCell>Jane Doe</TableCell>
            <TableCell className="text-right">35 jours</TableCell>
            <TableCell className="flex w-full justify-between">
              <FaEdit className="h-7 w-7 hover:text-cyan-300 dark:text-cyan-300/70"/>
              <IoMdTrash className="h-7 w-7 hover:text-cyan-300 dark:text-cyan-300/70"/>
            </TableCell>
          </TableRow>
          {/* exemple*/}
          <TableRow>
            <TableCell className="font-medium">ENT003</TableCell>
            <TableCell>05/08/2021</TableCell>
            <TableCell>Private company</TableCell>
            <TableCell>Alice Doe</TableCell>
            <TableCell className="text-right">25 jours</TableCell>
            <TableCell className="flex w-full justify-between">
              <FaEdit className="h-7 w-7 hover:text-cyan-300 dark:text-cyan-300/70"/>
              <IoMdTrash className="h-7 w-7 hover:text-cyan-300 dark:text-cyan-300/70"/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    )
  }