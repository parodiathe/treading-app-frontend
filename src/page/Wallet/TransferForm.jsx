import React from 'react';
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {DialogClose} from "@/components/ui/dialog.jsx";

const TransferForm = () => {

  const [formData, setFormData] = React.useState({
    amount: '',
    walletId: '',
    purpose: '',
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    console.log(formData)
  }

  return (
      <div className="pt-10 space-y-5">

        <div>
          <h1 className="pb-1">Enter Amount</h1>
          <Input
              name="amount"
              onChange={handleChange}
              value={formData.amount}
              className="py-7"
              placeholder="$9999"
          />
        </div>

        <div>
          <h1 className="pb-1">Wallet Id</h1>
          <Input
              name="walletId"
              onChange={handleChange}
              value={formData.walletId}
              className="py-7"
              placeholder="#ABCD1234"
          />
        </div>

        <div>
          <h1 className="pb-1">Purpose</h1>
          <Input
              name="purpose"
              onChange={handleChange}
              value={formData.purpose}
              className="py-7"
              placeholder="gift for your friend..."
          />
        </div>

        <DialogClose className="w-full">
          <Button onClick={handleSubmit}
                  className="w-full py-7">
            Submit
          </Button>
        </DialogClose>

      </div>
  );
};

export default TransferForm;