import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function Comment() {
  const [data, setData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/comments";

  let getAPIData = () => {
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(api, {
        body: "Custom Body",
        title: "ABH",
        userId: 1,
      })
      .then((res) => {
        console.log("Data send Successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .put(api + "/1", { body: "Custom Body" })
      .then((res) => {
        console.log("Data send Successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .delete(api)
      .then((res) => {
        console.log("Data Deleted Successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <Button onClick={getAPIData}className='bg-dark' variant="contained">
          Comments Data
        </Button>
        {data.map((e, i) => (
          <div>
            <p>{e.title}</p>
          </div>
        ))}
      </div>
    </>
  );
  }
  
  export default Comment;