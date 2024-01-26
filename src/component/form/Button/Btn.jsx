import React, { useContext } from 'react'
import validation from './validate'
import MyContext from '../MyContext.js'


const Btn = () => {

  const { setShowMain , setShowResult , setWinner , user } = useContext(MyContext);

let userArray = [];
let totalMessi;
let totalRonaldo;
let totalCount;

let checkDummydataIsStoredOrNot = false;

const storedData = localStorage.getItem('userArray');

const storedDataFunction = () =>{

    userArray = JSON.parse(storedData);
    
    if (userArray.length === 0) {
        checkDummydataIsStoredOrNot = true;
    }
}

const handleSubmit = (data) => {
    // data from props
    let name = data.uName;
    let country = data.country
    let email = data.email;
    let favorite = data.favoritePlayer;

    // Function to perform form validation
    let check =  validation(data);

    storedDataFunction();

    // If validation passes, add user data to the array, store in localStorage, reset the form, and update progress
    if (check) {
        if(checkDummydataIsStoredOrNot){
            // Populate userArray with dummy data
            dummyUsers.forEach((data) => {
                 userArray.push(data);
                });
        }
        userArray.push({ userName: name, userCountry: country, userEmail: email, userFavorite: favorite });
        // userArray = [];
        localStorage.setItem('userArray', JSON.stringify(userArray));
        // progress();
        setShowMain(false);
       setShowResult(false);
        showResult();
    }
};

// Function to calculate and display poll results
const showResult = () => {
    let countMessi = 0;
    let countRonaldo = 0;

    // Count votes for Messi and Ronaldo
    userArray.forEach((data) => {
        if (data.userFavorite === "messi") {
            countMessi++;
        } else if (data.userFavorite === "ronaldo") {
            countRonaldo++;
        }
    });

    // Calculate percentages
    totalCount = countMessi + countRonaldo;
    totalMessi = ((countMessi / totalCount) * 100).toFixed(0);
    totalRonaldo = ((countRonaldo / totalCount) * 100).toFixed(0);

    // Display results in the console
    console.log("totalMessi: " + totalMessi);
    console.log("totalRonaldo: " + totalRonaldo);
    console.log(userArray);

    setWinner(()=> {
      return {
        messiPercentage : totalMessi,
        ronaldoPercentage : totalRonaldo,
      }
    }); 
};

const dummyUsers = [
    { userName: "Alice", userCountry: "USA", userEmail: "alice@example.com", userFavorite: "messi" },
    { userName: "Bob", userCountry: "UK", userEmail: "bob@example.com", userFavorite: "ronaldo" },
    { userName: "Charlie", userCountry: "Canada", userEmail: "charlie@example.com", userFavorite: "messi" },
    { userName: "David", userCountry: "Germany", userEmail: "david@example.com", userFavorite: "ronaldo" },
    { userName: "Emma", userCountry: "France", userEmail: "emma@example.com", userFavorite: "messi" },
    { userName: "Frank", userCountry: "Spain", userEmail: "frank@example.com", userFavorite: "ronaldo" },
    { userName: "Grace", userCountry: "Italy", userEmail: "grace@example.com", userFavorite: "messi" },
    { userName: "Harry", userCountry: "Australia", userEmail: "harry@example.com", userFavorite: "ronaldo" },
    { userName: "Ivy", userCountry: "Japan", userEmail: "ivy@example.com", userFavorite: "messi" },
    { userName: "Jack", userCountry: "Brazil", userEmail: "jack@example.com", userFavorite: "ronaldo" },
    // Repeat the pattern for additional objects
];

  const handleClick = (event) => {
    event.preventDefault();
    handleSubmit(user);
  }
  
  return (
    <button onClick={handleClick} type="submit">Submit</button>
  )
}

export default Btn