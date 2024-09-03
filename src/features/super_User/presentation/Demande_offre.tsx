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
import { MdCancel, MdCheckCircle } from "react-icons/md"

  export function ListeDemande () {
    return(
        <Table>
        <TableCaption>A list of Entities want to be a subscriber.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Company</TableHead>
            <TableHead>Déja membre ou pas</TableHead>
            <TableHead>Demande dù</TableHead>
            <TableHead>Type d'abonnement</TableHead>
            <TableHead>Délai licence</TableHead>
            <TableHead className="text-right w-[4vw]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">ENT003</TableCell>
            <TableCell>Pas</TableCell>
            <TableCell>17/22/2025</TableCell>
            <TableCell>Premium</TableCell>
            <TableCell className="text-right">5 ans</TableCell>
            <TableCell className="flex w-full justify-between">
              <MdCheckCircle className="h-7 w-7 hover:text-green-300 dark:text-green-300/70"/>
              <MdCancel className="h-7 w-7 hover:text-red-300 dark:text-red-300/70"/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">ENT002</TableCell>
            <TableCell>Oui</TableCell>
            <TableCell>15/08/2023</TableCell>
            <TableCell>Standard</TableCell>
            <TableCell className="text-right">3 ans</TableCell>
            <TableCell className="flex w-full justify-between">
               <MdCheckCircle className="h-7 w-7 hover:text-green-300 dark:text-green-300/70"/>
               <MdCancel className="h-7 w-7 hover:text-red-300 dark:text-red-300/70"/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">ENT001</TableCell>
            <TableCell>Pas</TableCell>
            <TableCell>10/08/2024</TableCell>
            <TableCell>Basic</TableCell>
            <TableCell className="text-right">2 ans</TableCell>
            <TableCell className="flex w-full justify-between">
               <MdCheckCircle className="h-7 w-7 hover:text-green-300 dark:text-green-300/70"/>
               <MdCancel className="h-7 w-7 hover:text-red-300 dark:text-red-300/70"/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    )
  }