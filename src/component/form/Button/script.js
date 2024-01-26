// import validation from './validate'

// // Array to store user data
// let userArray = [];
// // Variables to track the total votes for Messi and Ronaldo, and the overall total votes
// let totalMessi;
// let totalRonaldo;
// let totalCount;

// let checkDummydataIsStoredOrNot = false;

// // Load data from localStorage on page load
// const storedData = localStorage.getItem('userArray');

// const storedDataFunction = () =>{

//     userArray = JSON.parse(storedData);
    
//     if (userArray.length === 0) {
//         checkDummydataIsStoredOrNot = true;
//     }
// }

// const handleSubmit = (data) => {
//     // data from props
//     let name = data.uName;
//     let country = data.country
//     let email = data.email;
//     let favorite = data.favoritePlayer;

//     // Function to perform form validation
//     let check =  validation(data);

//     storedDataFunction();

//     // If validation passes, add user data to the array, store in localStorage, reset the form, and update progress
//     if (check) {
//         if(checkDummydataIsStoredOrNot){
//             // Populate userArray with dummy data
//             dummyUsers.forEach((data) => {
//                  userArray.push(data);
//                 });
//         }
//         userArray.push({ userName: name, userCountry: country, userEmail: email, userFavorite: favorite });
//         // userArray = [];
//         localStorage.setItem('userArray', JSON.stringify(userArray));
//         // progress();
//         showResult();
//     }
// };

// // Function to calculate and display poll results
// const showResult = () => {
//     let countMessi = 0;
//     let countRonaldo = 0;

//     // Count votes for Messi and Ronaldo
//     userArray.forEach((data) => {
//         if (data.userFavorite === "messi") {
//             countMessi++;
//         } else if (data.userFavorite === "ronaldo") {
//             countRonaldo++;
//         }
//     });

//     // Calculate percentages
//     totalCount = countMessi + countRonaldo;
//     totalMessi = ((countMessi / totalCount) * 100).toFixed(0);
//     totalRonaldo = ((countRonaldo / totalCount) * 100).toFixed(0);

//     // Display results in the console
//     console.log("totalMessi: " + totalMessi);
//     console.log("totalRonaldo: " + totalRonaldo);
//     console.log(userArray);

//     // Update HTML elements with calculated percentages
//     // $("#messi-percent").text(`${totalMessi} %`);
//     // $("#ronaldo-percent").text(`${totalRonaldo} %`);

//     // Update progress bars
//     // $("#myProgressMessi").val(totalMessi);
//     // $("#myProgressRonaldo").val(totalRonaldo);

//     // Hide tick icon based on the winner
//     // if (totalMessi > totalRonaldo) {
//     //     $(".ronaldo-tick").css("visibility", "hidden");
//     // } else if (totalMessi < totalRonaldo) {
//     //     $(".messi-tick").css("visibility", "hidden");
//     // }
// };

// // Function to switch to results view
// // const progress = () => {
// //     $('main').css("display", "none");
// //     $('.show-result').css("display", "block");
// //     showResult();
// // };


// // Dummy user data for initial testing
// const dummyUsers = [
//     { userName: "Alice", userCountry: "USA", userEmail: "alice@example.com", userFavorite: "messi" },
//     { userName: "Bob", userCountry: "UK", userEmail: "bob@example.com", userFavorite: "ronaldo" },
//     { userName: "Charlie", userCountry: "Canada", userEmail: "charlie@example.com", userFavorite: "messi" },
//     { userName: "David", userCountry: "Germany", userEmail: "david@example.com", userFavorite: "ronaldo" },
//     { userName: "Emma", userCountry: "France", userEmail: "emma@example.com", userFavorite: "messi" },
//     { userName: "Frank", userCountry: "Spain", userEmail: "frank@example.com", userFavorite: "ronaldo" },
//     { userName: "Grace", userCountry: "Italy", userEmail: "grace@example.com", userFavorite: "messi" },
//     { userName: "Harry", userCountry: "Australia", userEmail: "harry@example.com", userFavorite: "ronaldo" },
//     { userName: "Ivy", userCountry: "Japan", userEmail: "ivy@example.com", userFavorite: "messi" },
//     { userName: "Jack", userCountry: "Brazil", userEmail: "jack@example.com", userFavorite: "ronaldo" },
//     // Repeat the pattern for additional objects
//     // ...
// ];

// export default handleSubmit
