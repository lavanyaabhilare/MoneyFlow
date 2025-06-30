import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";

const AccountCard = ({ account }) => {
  const { name, balance, lastTransactionDate } = account;

  return (
    <Card className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold leading-6 text-gray-900">{name}</h3>
          <p className="text-sm font-medium text-gray-500">
            Last transaction: {format(new Date(lastTransactionDate), 'MMM d, yyyy')}
          </p>
        </div>
        <div className="text-end text-sm font-medium text-gray-900">
          {formatCurrency(balance)}
        </div>
      </div>
    </Card>
  );
};

export default AccountCard; 