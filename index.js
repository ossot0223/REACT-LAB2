import React from "react";
import { render } from "react-dom";
import { rootCertificates } from "tls";
import app from "./app";
ReactDOM.render(<app />,document.getElementById("root"))
