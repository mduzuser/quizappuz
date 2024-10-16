// rrd import

import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  
  if(error.status == 404) {
    return (
      <div className="error-container container">
        <h1>404 Error</h1>
        <h3>"404: Bu sahifa ishlamayapti, ehtimol u ta’tilga chiqqan bo'lishi mumkin!"</h3>
        <Link to="/" className="btn">Go back to Homepage</Link>
      </div>
    );
  }
  
  return (
    <div className="error-container container">
        <h1>404 Error</h1>
        <h3>"404 – Yo'qolgan narsani qidiryapsizmi? Yaxshisi, detektiv yollang!"</h3>
        <Link to="/" className="btn">Go back to Homepage</Link>
      </div>
  )
}

export default Error