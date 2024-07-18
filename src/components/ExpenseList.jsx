import React from 'react';
import { List, Typography, Box, Divider } from '@mui/material';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, deleteExpense, total }) {
  return (
    <Box>
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Expenses
      </Typography>
      <List>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            deleteExpense={deleteExpense}
          />
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" align="right">
        Total: ${total.toFixed(2)}
      </Typography>
    </Box>
  );
}

export default ExpenseList;