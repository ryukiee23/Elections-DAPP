import React, { useState } from "react";

const Body = ({ candidate1, candidate2, candidate3, currAccount, vote }) => {
  const [TempCand, setTempCand] = useState();

  const onchange = async (e) => {
    setTempCand(e.target.value);
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    if (TempCand.id !== 0) {
      vote(Number(TempCand));
    } else {
      window.alert("There is problem in Submission!!");
    }
  };

  return (
    <div className="mt-4 text-center" style={{ color: "#000000" }}>
      <h2>Election Results</h2>
      <hr
        style={{
          width: "70%",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "#000000",
        }}
      />

      <div className="p-3 align-content-center" style={{ width: "100%" }}>
        <div className="row ml-auto mr-auto mb-2" style={{ width: "90%" }}>
          <div className="col">
            <p>{candidate1.id}</p>
          </div>
          <div className="col">
            <p>{candidate1.name}</p>
          </div>
          <div className="col">
            <p>{candidate1.voteCount}</p>
          </div>
        </div>
        <hr
          style={{ width: "70%", borderStyle: "solid", borderColor: "#000000" }}
        />
        <div className="row ml-auto mr-auto mt-2 mb-2" style={{ width: "90%" }}>
          <div className="col">
            <p>{candidate2.id}</p>
          </div>
          <div className="col">
            <p>{candidate2.name}</p>
          </div>
          <div className="col">
            <p>{candidate2.voteCount}</p>
          </div>
        </div>
        <hr
          style={{ width: "70%", borderStyle: "solid", borderColor: "#000000" }}
        />
        <div className="row ml-auto mr-auto mt-2 mb-2" style={{ width: "90%" }}>
          <div className="col">
            <p>{candidate3.id}</p>
          </div>
          <div className="col">
            <p>{candidate3.name}</p>
          </div>
          <div className="col">
            <p>{candidate3.voteCount}</p>
          </div>
        </div>
      </div>
      <div className="my-5 mr-auto ml-auto text-left" style={{ width: "70%" }}>
        <h5>Cast Your Vote:</h5>
        <form onSubmit={onsubmit}>
          <select name="candidate" className="form-control" onChange={onchange}>
            <option defaultValue={""}>Select</option>
            <option value="1">{candidate1.name}</option>
            <option value="2">{candidate2.name}</option>
            <option value="3">{candidate3.name}</option>
          </select>
          <button className="btn btn-primary mt-2 btn-md w-100">
            Vote candidate : {TempCand}
          </button>
        </form>
      </div>
      <p className="my-5">
        Your Address:<span className="font-weight-bold"> {currAccount}</span>
      </p>
    </div>
  );
};

export default Body;
