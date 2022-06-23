import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
    const domNode = useRef();
    
    useEffect(() => {
        let maybehandler = (e) => {
          if (!domNode.current.contains(e.target)) {
            handler();
          }
        };
        document.addEventListener("mousedown", maybehandler);
    
        return () => {
          document.removeEventListener("mousedown", maybehandler);
        };
      });

      return domNode;
}

export default useClickOutside;