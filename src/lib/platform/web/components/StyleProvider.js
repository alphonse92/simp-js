import React, {
  useLayoutEffect,
  useCallback,
  useState,
  useContext,
  useRef,
} from "react";
import ReactDOM from "react-dom";
import Stylesheet from "./Stylesheet";

export const providerContext = React.createContext(null);

export function useStylesheet() {
  const context = useContext(providerContext);

  if (!context) return null;

  const { stylesheets, addStylesheet, getNextId } = context;

  return {
    stylesheets,
    addStylesheet,
    getNextId,
  };
}

export default function StylesheetProvider(props) {
  const { children, styleRoot } = props;
  const [stylesheets, setStylesheets] = useState({});
  const nextId = useRef(0);

  useLayoutEffect(() => {
    nextId.current = 0;
  }, []);

  const getNextId = useCallback(() => {
    return nextId.current++;
  }, [nextId]);

  const contextValue = {
    stylesheets,
    addStylesheet: setStylesheets,
    getNextId,
  };

  const component = (
    <>
      {children}
      {ReactDOM.createPortal(
        <Stylesheet fragments={stylesheets} />,
        styleRoot || document.head
      )}
    </>
  );

  return React.createElement(
    providerContext.Provider,
    { value: contextValue },
    component
  );
}
