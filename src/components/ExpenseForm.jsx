import React, { useState } from 'react';
import { TextField, Button, Box, useTheme } from '@mui/material';

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    addExpense({ title, amount: parseFloat(amount) });
    setTitle('');
    setAmount('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
        sx={{ bgcolor: theme.palette.background.paper }}
      />
      <TextField
        fullWidth
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        margin="normal"
        sx={{ bgcolor: theme.palette.background.paper }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Expense
      </Button>
    </Box>
  );
}

export default ExpenseForm;