// ReactDOM.render is no longer supported in React 18. Use createRoot instead. 
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

import ReactDOM from "react-dom/client";
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
