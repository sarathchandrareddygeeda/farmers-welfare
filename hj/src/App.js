import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./components/Register";
import ContactForm from "./components/Contact";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import { UserProvider } from "./components/context/UserContext";
import LedgerForm from "./components/Ledger";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LedgerTable from "./components/LedgerTable";
import SuggestionForm from "./components/SuggestionForm";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/add-report" element={<LedgerForm />} />
            <Route path="/details" element={<LedgerTable />} />
            <Route path="/suggestion-form/:id" element={<SuggestionForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </UserProvider>
    </Provider>
  );
}

export default App;
