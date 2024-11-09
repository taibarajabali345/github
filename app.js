
const firebaseConfig = {
  //use your configurations
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
// const db = firebase.firestore();

// function writeData() {
//   db.collection("users")
//     .add({
//       firstName: "Ada",
//       lastName: "Lovelace",
//       email: "iqra@gmail.com",
//       phone: 123456789,
//       city: "Karachi",
//     })
//     .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
// }

// // writeData();

// function getData() {
//   db.collection("users")
//     .get()
//     .then((data) => {
//       // console.log(data)
//       data.forEach((doc) => {
//         console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//       });
//     });
// }

// // getData()

// async function getDataByEmail(email) {
//     let users = [];
  
//     // Await the Firestore query to get the data
//     const data = await db.collection("users")
//       .where("email", "==", email)
//       .get();
  
//     // Process the Firestore data after the query resolves
//     data.forEach((doc) => {
//       users.push(doc.id)
//     });
  
//     console.log('--------------', users);
//     return users; // Ensure this happens after the Firestore query is resolved
//   }
  

// const user = getDataByEmail("iqra@gmail.com");

// function writeProductData() {
//   db.collection("products")
//     .add({
//       itemId: 1,
//       title: "book",
//       price: 45,
//       qty: 30,
//     })
//     .then((docRef) => {
//       console.log("Product added with ID: ", docRef.id);
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
// }

// // writeProductData()

// function writeOrderData() {
//   db.collection("orders")
//     .add({
//       itemId: 1,
//       qty: 2,
//       email: "iqra@gmail.com",
//       date: new Date().toLocaleString(),
//     })
//     .then((docRef) => {
//       console.log("Product added with ID: ", docRef.id);
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
// }

// // writeOrderData()

// function getOrder() {
//   db.collection("orders")
//     .get()
//     .then((data) => {
//       console.log("orders ..............", data);
//       data.forEach((doc) => {
//         console.log(`${doc.id} => ${JSON.stringify(doc.data())} orderssssssss`);
//         let userEmail = doc.data().email;
//         console.log(userEmail);
//         getDataByEmail(userEmail);
//       });
//     });
// }

// // getOrder()

// function updateUserDetails(email) {
//   getDataByEmail(email).then((users) => {
//     console.log("user id: ", users); // This will now have the correct data
//     var userRef = db.collection("users").doc(users[0]);

//     // Set the "capital" field of the city 'DC'
//     return userRef
//       .update({
//         firstName: "New User",
//       })
//       .then(() => {
//         console.log("Document successfully updated!");
//       })
//       .catch((error) => {
//         // The document probably doesn't exist.
//         console.error("Error updating document: ", error);
//       });
//   });
// }

// // updateUserDetails("iqra@gmail.com");

// function deleteUserData(email) {
//     getDataByEmail(email).then((users) => {
//         console.log("user id: ", users); // This will now have the correct data
//         var userRef = db.collection("users").doc(users[0]);

//         return userRef.delete().then(() => {
//             console.log("Document successfully deleted!");
//         }).catch((error) => {
//             console.error("Error removing document: ", error);
//         });
//     })
// }

// deleteUserData('iqra@gmail.com')

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
console.log(storage)

// Create a storage reference from our storage service
var storageRef = storage.ref();

// Create a child reference
var imagesRef = storageRef.child('images');
// imagesRef now points to 'images'

document.addEventListener('click', ()=> {
  const file = document.getElementById('file').value
  console.log(file)

  imagesRef.put(file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
})


// Child references can also take paths delimited by '/'
// var spaceRef = storageRef.child('images/space.jpg');
// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images"
