// import { useState, useEffect } from 'react'
// const App = (props) => {
//   const [userInfo, setUserInfo] = useState({
//     txtName: '',
//     txtPassword: '',
//     txtContent: '',
//     txtGender: 0,
//     txtLanguage: 'EN',
//     txtStatus: false
//   })
//   const [submitSuccess, setSubmitSuccess] = useState(false)

//   useEffect(() => {
//     // componentDidMount
//     // goi api
//     // set du lieu
//     return () => {
//       // componentUnMount
//       // cleanup
//     }
//   }, [
//     // props
//   ])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(userInfo);
//     const a = {
//       txtName: e.target.txtName.value,
//       txtPassword: e.target.txtPassword.value,
//       txtContent: e.target.txtContent.value,
//       txtGender: e.target.txtGender.value,
//       txtLanguage: e.target.txtLanguage.value,
//       txtStatus: e.target.txtStatus.value
//     }
//     setUserInfo(a)
//     setSubmitSuccess(true)
//   }
//   // const onHandleChange = (e) => {
//   //   setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
//   // }

//   return <div className="App">
//     <div className="content">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>User Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="txtName" />
//         </div>
//         <div className="form-group">
//           <label>password</label>
//           <input
//             type="password"
//             className="form-control"
//             name="txtPassword"
//           />
//         </div>
//         <div className="form-group">
//           <label>Content</label>
//           <textarea
//             className="form-control"
//             rows="3"
//             name="txtContent"
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label>Gender</label>
//           <select
//             className="form-control"
//             name="txtGender"
//           >
//             <option value={0}>Nam</option>
//             <option value={1} selected={userInfo.txtGender === 1}>Nữ</option>
//           </select>
//         </div>
//         <div className="form-check">
//           <label>
//             <input
//               className="form-check-input"
//               type="radio"
//               name="txtLanguage"
//               value="EN"
//             />
//             English
//               </label>
//           <label>
//             <input
//               className="form-check-input"
//               type="radio"
//               name="txtLanguage"
//               value="VI"
//             />
//             Viet Nam
//               </label>
//         </div>
//         <div className="form-check">
//           <label>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               name="txtStatus"
//             />
//             Status
//               </label>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary"
//         >Submit</button>
//       </form>
//       <div className="info">
//         {submitSuccess && <p>{JSON.stringify(userInfo)}</p>}
//       </div>
//     </div>
//   </div>
// }
