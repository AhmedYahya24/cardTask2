import React from "react";
import { Provider } from "react-redux";
import store from "./utils/readux/store";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ColumnsContainer from "./components/ColumnsContainer/ColumnsContainer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Form />
        <hr />
        <ColumnsContainer />
      </div>
    </Provider>
  );
}

export default App;
