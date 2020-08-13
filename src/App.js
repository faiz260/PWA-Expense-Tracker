import React from 'react';
import {Header} from './Components/Header'
import {Balance} from './Components/Balance'
import {IncomeExpense} from './Components/IncomeExpense'
import {TransactionList} from './Components/TransactionList'
import {AddTransaction} from './Components/AddTransactions'
import {Footer} from './Components/footer'
import './App.css';
import Container from '@material-ui/core/Container';
import { configureNotification } from "./Service/firebase-service";
import {GlobalProvider} from './Context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      {configureNotification()}
      <Header/>
      <Container maxWidth="sm">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
        <Footer/>
      </Container>
    </GlobalProvider>
  );
}

export default App;
