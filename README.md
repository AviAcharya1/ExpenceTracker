# ExpenseTracker

ExpenseTracker is a simple, user-friendly web application built with React, Vite, and Material-UI (MUI) that helps you manage and track your expenses. It features an intuitive interface for adding, viewing, and deleting expenses, as well as a dark mode option for comfortable use in low-light environments.

## Features

- Add new expenses with title and amount
- View a list of all expenses
- Delete individual expenses
- Automatic calculation of total expenses
- Dark mode toggle for better visibility in different lighting conditions
- Responsive design that works on desktop and mobile devices
- Local storage to persist expenses between sessions

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/aviacharya1/ExpenseTracker.git
   ```

2. Navigate to the project directory:
   ```
   cd expense-tracker
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173` to view the application.

### Building for Production

To create a production build, run:

```
npm run build
```

This will generate a `dist` folder with the production-ready files.

## Usage

1. **Adding an Expense**: 
   - Fill in the "Expense Title" and "Amount" fields in the form.
   - Click the "Add Expense" button to add the expense to your list.

2. **Viewing Expenses**: 
   - All expenses are listed below the form.
   - Each expense shows its title and amount.

3. **Deleting an Expense**: 
   - Click the trash can icon next to an expense to delete it.

4. **Toggling Dark Mode**: 
   - Use the switch in the top-right corner to toggle between light and dark modes.

5. **Viewing Total Expenses**: 
   - The total of all expenses is displayed at the bottom of the expense list.

## Contributing

We welcome contributions to the ExpenseTracker project! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a clear, descriptive commit message.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

Please ensure your code adheres to the existing style and that all tests pass before submitting a pull request.

### Areas for Improvement

Here are some ideas for future enhancements:
- Implement categories for expenses
- Add date tracking for each expense
- Create data visualization features (charts, graphs)
- Add export functionality (CSV, PDF)
- Implement user authentication and cloud storage

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- React team for the fantastic library
- Material-UI team for the beautiful components
- Vite team for the fast build tool




