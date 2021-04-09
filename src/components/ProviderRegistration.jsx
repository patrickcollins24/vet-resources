// import React from "react";
// import LoginMessage from "./LoginMessage";

// const ProviderRegistration = () => {
//   const [provider, setProvider] = useState(true);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  

//   _onChange = (field, value) => {
//     this.setState({
//       [field]: value
//     });
//   };

//   _handleSubmit = async(event) => {
//     event.preventDefault();
//     const registerData = {
//       provider: provider,
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       username: username,
//       password: password,

//     };
  

//     const response = await fetch(`http://127.0.0.1:3003/users/register`,{
//       method: "POST",
//       headers: { "Content-Type" : "application/json" },
//       body: JSON.stringify(registerData)
//     });


//   };


//     return (
//       <>
//         <form onSubmit={this._handleSubmit}>
//             <div><h1>Registration</h1>
//         </div>
//         <div><h2>Please Fill out the following information</h2></div>
//             <label>
//             First Name:
//             <input
//               type="text"
//               name="FirstName"
//               placeholder="Your First Name"
//               value={this.state.FirstName}
//               onChange={(event) => {
//                 this._onChange("FirstName", event.target.value);
//               }}
//             />
//           </label>
//           <br/>

//                 <label>
//                     Last Name:
//                     <input
//                         type="text"
//                         name="LastName"
//                         placeholder="Your LastName"
//                         value={this.state.LastName}
//                         onChange={(event) => {
//                         this._onChange("LastName", event.target.value);
//                         }}
//                     />
//                 </label>
//                 <br/>

//           <div>
//                 <label>
//                     Email:
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Your email"
//                         value={this.state.email}
//                         onChange={(event) => {
//                         this._onChange("email", event.target.value);
//                         }}
//                     />
//                 </label>
//                 <br/>
//           </div>
//           <div>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         name="username"
//                         placeholder="Your username"
//                         value={this.state.username}
//                         onChange={(event) => {
//                         this._onChange("username", event.target.value);
//                         }}
//                     />
//                 </label>
//                 <br/>
//           </div>
//           <div>
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Your Password"
//                         value={this.state.password}
//                         onChange={(event) => {
//                         this._onChange("password", event.target.value);
//                         }}
//                     />
//                 </label>
//                 <br/>
//                 <label>
//                     Confirm Password:
//                     <input
//                         type="password"
//                         name="PasswordConfirm"
//                         placeholder="Confirm Password"
//                         value={this.state.PasswordConfirm}
//                         onChange={(event) => {
//                         this._onChange("PasswordConfirm", event.target.value);
//                         }}
//                     />
//                 </label>
//                 <br/>
//           </div>
//           <button type="submit">Submit</button>
//           <div>
//                 <label>
//                     Provider? Click here:
//                     <input
//                         type="checkbox"
//                         name="Provider?"
//                         placeholder="Provider?"
//                         onChange={this.handleChange} 
//                     />
//                 </label>
//                 <br/>
//           </div>         
          
//         </form>
//         {/* {!!this.state.serverResponse ? (
//           <LoginMessage
//             isValid={this.state.serverResponse.isValid}
//             message={this.state.serverResponse.message}
//           />
//         ) : null} */}
//       </>
//     );
//   }


// export default ProviderRegistration;
