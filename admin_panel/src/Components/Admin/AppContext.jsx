import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [people, setPeople] = useState([
    { id: 1, username: "Alice", password: "pass1" },
    { id: 2, username: "Bob", password: "pass2" },
    { id: 3, username: "Charlie", password: "pass3" },
    { id: 4, username: "David", password: "pass4" },
    { id: 5, username: "Eva", password: "pass5" },
  ]);

  const [files, setFiles] = useState([
    { id: 1, filename: "Document.pdf" },
    { id: 2, filename: "Report.docx" },
  ]);

  return (
    <AppContext.Provider value={{ people, setPeople, files, setFiles }}>
      {children}
    </AppContext.Provider>
  );
}
