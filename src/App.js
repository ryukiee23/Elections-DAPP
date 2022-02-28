import React, { useState,useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Web3 from 'web3';
import ElectABI from './contracts/Election.json';
import Body from './Body';

function App() {

const [currAccount,setCurrAccount]= useState("Account Address");
const [loader,setLoader]=useState(true);
const [Elect,setElectSM] =useState();
const [candidate1,setCand1] = useState();
const [candidate2,setCand2] = useState();
const [candidate3,setCand3] = useState();

  useEffect(() => {
    loadWeb3();
    loadBlockChainData();
  }, [])
  
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currenProvider);
    } else {
      window.alert(
        "This Browser does not support Ethereum Wallet! Please install MetaMask."
      );
    }
  };

  const loadBlockChainData = async () => {
    setLoader(true);
    const web3 = window.web3;
    await window.ethereum.send('eth_requestAccounts');
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrAccount(account);

    const networkId = await web3.eth.net.getId();
    const networkdata = ElectABI.networks[networkId];

    if (networkdata) {
      const election = new web3.eth.Contract(ElectABI.abi, networkdata.address);
      const cand1 = await election.methods.candidates(1).call();
      const cand2 = await election.methods.candidates(2).call();
      const cand3 = await election.methods.candidates(3).call();
      setCand1(cand1);
      setCand2(cand2);
      setCand3(cand3);
      setElectSM(election);
      setLoader(false);
    } else {
      window.alert("This Smart Contract is not deployed to current network!");
    }
    window.reload();
  };

  const vote = async (candidateid) => {
    setLoader(true);
    await Elect.methods.Vote(candidateid).send({ from: currAccount });
    setLoader(false);
  };

  if (loader) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }

  return (
    <div className="App">
      <Navbar currAccount={currAccount}/>
      <Body 
      candidate1={candidate1} 
      candidate2={candidate2} 
      candidate3={candidate3} 
      currAccount={currAccount}
      vote={vote}/>
    </div>
  );
}

export default App;
