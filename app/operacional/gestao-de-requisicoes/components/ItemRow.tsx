import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ChevronDown } from "lucide-react";
import { DataType } from "../data";
import ExpandedRowGroup from "./ExpandedRowGroup";

type ItemRowProps = {
  row: DataType;
  isOpen: boolean;
  onToggle: () => void;
};

export default function ItemRow({ row, isOpen, onToggle }: ItemRowProps) {
  const balanceWithExpandButton = (
    <div className="flex items-center justify-end">
      <span className="mr-2">{row.balance}</span>
      <Button onClick={onToggle} variant="ghost" size="auto">
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>
    </div>
  );

  return (
    <>
      <TableRow>
        <TableCell className="text-center">
          <input type="checkbox" className="w-4 h-4" />
        </TableCell>
        <TableCell className="font-medium">{row.itemCode}</TableCell>
        <TableCell>{row.item}</TableCell>
        <TableCell colSpan={2}>{balanceWithExpandButton}</TableCell>
      </TableRow>

      {isOpen && <ExpandedRowGroup orders={row.orders} />}
    </>
  );
}
