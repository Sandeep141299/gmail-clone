import React, { useEffect } from "react";

function Api() {
  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
      let actualData = await response.json();

      console.log(actualData, actualData[2].userId, actualData.userId, actualData.title, actualData.userId);
    }
    getData();
  }, []);
  return (
    <div>
      <h1>sandeep</h1>
    </div>
  );
}

export default Api;
