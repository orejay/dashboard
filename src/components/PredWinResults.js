import React, { useState, useEffect, useRef } from "react";

const arrowStyles = {
  active: { color: "#555555" },
  disabled: { color: "#D3D3D3" },
};

const PredWinResults = () => {
  const token = localStorage.getItem("admintoken");
  const [data, setData] = useState({});
  const [userOption, setUserOption] = useState("played");
  const [round, setRound] = useState("");
  const [users, setUsers] = useState([]);
  const [pagedUsers, setPagedUsers] = useState([]);
  const [results, setResults] = useState("");
  const [page, setPage] = useState(1);
  const [expiry, setExpiry] = useState("");
  const playerRef = useRef(null);
  const roundRef = useRef(null);
  const api = process.env.REACT_APP_BASE_API;
  const [predictions, setPredictions] = useState({});
  const formatDateTime = (dt) => {
    const date = new Date(dt);
    return date.toISOString().slice(0, 16);
  };

  const handleResults = () => {
    let res = "";
    for (let i = 0; i < Object.values(predictions).length; i++) {
      res += predictions[`${i}`]?.result;
    }
    setResults(res);

    return res;
  };

  const getWon = async () => {
    // const answer = handleResults();
    const res = await fetch(`${api}/getendpoints/won-users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        round: "Round " + roundRef.current.value,
      }),
    });

    const res_json = await res.json();

    setPagedUsers(res_json.users.slice(0, 20));
    setUsers(res_json.users);
    console.log(res_json);
  };

  const getPlayed = async () => {
    const res = await fetch(`${api}/getendpoints/played-users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        round: "Round " + roundRef.current.value,
      }),
    });

    const res_json = await res.json();
    setUsers(res_json.users);
    setPagedUsers(res_json.users.slice(0, 20));
  };

  const getUsers = (type) => {
    if (type === "played") {
      getPlayed();
    } else if (type === "won") {
      getWon();
    }
  };

  const getPredictions = async (id) => {
    const res = await fetch(`${api}/getendpoints/predictions/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res_json = await res.json();
    setData(res_json);
    const predictionsList = res_json.predictions;
    var newPredictions = {};
    for (let i = 0; i < predictionsList.length; i++) {
      newPredictions = { ...newPredictions, [i]: predictionsList[i] };
    }
    setExpiry(formatDateTime(res_json.expiry));
    setRound(res_json.round);
    setPredictions(newPredictions);
    console.log("predictions >>>>>>>>>>>", newPredictions);
  };
  useEffect(() => {
    // getPredictions();
  }, []);

  return (
    <div>
      <div className="flex items-center">
        <select
          name="user-picker"
          id="user-picker"
          className="dd md:w-1/3"
          ref={playerRef}
          style={{
            marginTop: 0,
          }}
        >
          <option value="played">Players</option>
          <option value="won">Winners</option>
        </select>
        <input
          type="text"
          ref={roundRef}
          placeholder="Round eg 2"
          className="mt-0 ml-4"
        />
        <button
          onClick={() => {
            playerRef.current.value === "played"
              ? getUsers("played")
              : getUsers("won");
          }}
          className="bg-gradient-to-r cursor-pointer from-teal-500 to-blue-600 text-white hover:shadow-md hover:shadow-green-200 hover:transition-all ease-in-out duration-500 rounded py-2 px-3 ml-3"
        >
          Submit
        </button>
      </div>
      <table className="text-xs lg:text-base">
        <thead className="font-semibold border-b">
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Country</td>
          <td>Prediction</td>
        </thead>
        {pagedUsers?.length > 0 ? (
          <tbody>
            {pagedUsers.map((each, index) => (
              <tr key={index}>
                <td>{each.full_name}</td>
                <td>{each.email}</td>
                <td>{each.phone_number}</td>
                <td>{each.country}</td>
                <td>
                  <div className="flex">
                    {each.prediction.split("").map((e, i) => (
                      <div
                        key={i}
                        className={`text-white text-xs rounded ${
                          e === "H"
                            ? "bg-green-600"
                            : e === "D"
                            ? "bg-blue-600"
                            : "bg-yellow-600"
                        }`}
                        style={{ margin: "0 0.5px", padding: "0px 2px" }}
                      >
                        {e}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          ""
        )}
      </table>
      {users.length > 0 ? (
        <div className="flex justify-center items-center h-10">
          <div
            className="flex items-center cursor-pointer"
            style={page > 1 ? arrowStyles.active : arrowStyles.disabled}
            onClick={() => {
              if (page > 1) {
                setPage(1);
                setPagedUsers(users.slice(0, 20));
              }
            }}
          >
            <ion-icon name="play-back" size="large"></ion-icon>
          </div>
          <div
            className="flex items-center cursor-pointer"
            style={page > 1 ? arrowStyles.active : arrowStyles.disabled}
            onClick={() => {
              if (page > 1) {
                page > 1 ? setPage(page - 1) : setPage(1);
                page - 1 > 1
                  ? setPagedUsers(users.slice((page - 1) * 20, page * 20))
                  : setPagedUsers(users.slice(0, 20));
              }
            }}
          >
            <ion-icon name="caret-back-outline" size="large"></ion-icon>
          </div>
          <h1 className="font-light big-shoulder">
            {page}
            {` of `}
            {Math.ceil(users?.length / 20)}
          </h1>
          <div
            className="flex items-center cursor-pointer"
            style={
              page < Math.ceil(users?.length / 20)
                ? arrowStyles.active
                : arrowStyles.disabled
            }
            onClick={() => {
              if (page < Math.ceil(users?.length / 20)) {
                page < Math.ceil(users?.length / 20)
                  ? setPage(page + 1)
                  : setPage(Math.ceil(users?.length / 20));
                setPagedUsers(users.slice(page * 20, (page + 1) * 20));
              }
            }}
          >
            <ion-icon name="caret-forward-outline" size="large"></ion-icon>
          </div>
          <div
            className="flex items-center cursor-pointer"
            style={
              page < Math.ceil(users?.length / 20)
                ? arrowStyles.active
                : arrowStyles.disabled
            }
            onClick={() => {
              if (page < Math.ceil(users?.length / 20)) {
                setPage(Math.ceil(users?.length / 20));
                setPagedUsers(
                  users.slice(
                    (Math.ceil(users?.length / 20) - 1) * 20,
                    Math.ceil(users?.length / 20) * 20
                  )
                );
              }
            }}
          >
            <ion-icon name="play-forward" size="large"></ion-icon>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="w-full flex justify-center">
        {users?.length === 0 && (
          <h4 className="py-2 big-shoulder text-red-500 text-center">
            No Users
          </h4>
        )}
      </div>
    </div>
  );
};

export default PredWinResults;
