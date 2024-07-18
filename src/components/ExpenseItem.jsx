import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ExpenseItem({ expense, deleteExpense }) {
  return (
    <ListItem>
      <ListItemText
        primary={expense.title}
        secondary={`$${expense.amount.toFixed(2)}`}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => deleteExpense(expense.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ExpenseItem;