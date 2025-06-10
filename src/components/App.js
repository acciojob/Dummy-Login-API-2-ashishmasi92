import React, { useState } from "react";

let predefiined = {
    email: "xyz@gmail.com",
    password: "123456"
}

const App = () => {
    let [loading, setLoading] = useState(false)
    let [userError, setUserError] = useState("")
    let [passwordError, setPasswordError] = useState("")

    let [input, setInput] = useState({
        email: "",
        password: ""
    })

    let { email, password } = input
    function handleChange(e) {
        let { name, value } = e.target;
        let updated = { ...input, [name]: value }

        if (name == "email") setUserError("")

        if (name == "password") setPasswordError("")

        setInput(updated)
    }


    function handleSubmit(e) {
        e.preventDefault()
        setPasswordError("")
        setUserError("")
        setLoading(true)


        setTimeout(() => {
            let trimedEmail = email.trim();
            let trimedPassword = password.trim();

            if (trimedEmail == "" || trimedPassword == "") {
                setUserError("User not found")
                setLoading(false)
                return
            }

            if (trimedEmail !== predefiined.email) {
                setUserError("User not found")
                setLoading(false)
                return
            }
            else if (trimedPassword !== predefiined.password) {
                setPasswordError("Password Incorrect")
                setLoading(false)
                return
            }
            else {
                alert("form submitted successfully")
                setInput({
                    email: "",
                    password: ""
                })
                setPasswordError("")
                setUserError("")
                setLoading(false)
            }


        }, 3000);


    }

    return (

        <>
            <form onSubmit={handleSubmit} >
                <label>
                    Email Id:
                    <input type="email" name="email" onChange={handleChange} id="input-email" value={email} />
                </label>
                {userError && <p id="user-error" style={{ color: "red" }} >{userError}</p>}
                <label>
                    Password:
                    <input type="password" name="password" onChange={handleChange} id="input-password" value={password} />
                </label>
                {passwordError && <p id="password-error" style={{ color: "red" }} >{passwordError}</p>}
                <button type="submit" id="submit-form-btn"  >{loading == true ? "loading in.." : "Log In"}</button>
            </form>

        </>
    )
}


export default App