import React, { useState, useEffect } from "react";

function App  (){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    const response = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=9M5hu4ALkj0IjvHANhZ4YsC8NLAzW5dn');
    const json = await response.json();
    setData(json.response.docs);
    setLoading(false)
    console.log(json.response.docs)
  }

  useEffect(() => {
    fetchData()

  }, []);

  return (<div>
        {data.map(article => (
            <h1 key ={article.id}>{article.abstract}</h1>
        ))}
  </div>);
};

export default App;