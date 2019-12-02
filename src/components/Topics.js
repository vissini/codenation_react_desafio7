import React, {useEffect, useState, useCallback} from "react";
import {Topic} from "./Topic";
import { getThreads, getThreadBySlug } from "./Api";

import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";


const Topics = () => {

  const [threads, setThreads] = useState([]);
  
  const handleGetThreads = async () => {
    const result = await getThreads();     
    setThreads(result);
    return result;
  }

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    handleGetThreads();
  },[]);

  const { url, path } = useRouteMatch();

  return (
    <React.Fragment>
      <ul>
        {threads.map((el, idx) => (
          <li key={idx}>
            <Link to={url+el.slug}>
              <h5>{el.title}</h5>
            </Link>
            
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${path}:topicName`} component={Topic} />
      </Switch>
    </React.Fragment>
  );
};

export { Topics };
