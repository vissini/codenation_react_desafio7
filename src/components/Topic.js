import React, {useEffect, useState} from "react";
import { getThreadBySlug } from "./Api";

import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";


const Topic = () => {
  const { topicName } = useParams();
  const [thread, setThread] = useState([]);
  const handleGetThreadBySlug = async (slug) => {
    const result = await getThreadBySlug(slug);     
    setThread(result);
    return result;
  }

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    console.log({topicName})
    handleGetThreadBySlug(topicName);
  },[]);
  return (
    <ul>
      {thread.map((el, idx) => (
        <li key={idx}>
          <h5>{el.title}</h5>
          <p>{el.total_replies}</p>
        </li>
      ))}
    </ul>
  );
};

export {Topic}