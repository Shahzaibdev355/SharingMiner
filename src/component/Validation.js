import { useEffect, useState } from "react";

const Validation = () => {


    let initialValues = { userName: "", email: "", password: "", userSelect:"" }

    let [formValues, setFormValues] = useState(initialValues)

    let [formError, setFormError] = useState({})
    let [isSubmit,setIsSubmit]= useState(false)

    let handleChange = (e) => {
        let { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues);
    }


    let handleSubmit = (e) => {
        e.preventDefault()
        setFormError(validate(formValues))
        setIsSubmit(true)
        // console.log("pass");
    }

    let userValid = function (user) {
        return (/^[A-Za-z.]{3,22}$/.test(user));
    }

    useEffect(()=>{
        console.log(formError);
        if(Object.keys(formError).length=== 0 && isSubmit){
            console.log(formValues);
        }

    },[formError])


    let validate = (values) => {
        const errors = {}
        // console.log(values.userName);
        if (!values.userName) {
            errors.userName = "Name must not be Empty!"
            // userTest.style.border = "3px solid red";
            let testBorder = document.querySelector("#userInput")
            testBorder.style.border = "3px solid red";
            
        }
        else if(!userValid(values.userName)){
            errors.userName = "Name must be valid!"
        }
        else{
            document.getElementById("userInput").style.border = "3px solid green";
        }

        if (!values.email) {
            errors.email = "email must not be Empty!"
        }

        if (!values.password) {
            errors.password = "password must not be Empty!"
        }

        if (!values.userSelect) {
            errors.userSelect = "Please select option!"
        }


        return errors

    }


    return (



        <>
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            <form onSubmit={handleSubmit}>
                <input id="userInput" type="text"
                    placeholder="name"
                    name="userName"
                    value={formValues.userName}
                    onChange={handleChange}
                />
                <p>{formError.userName}</p>


                <br />


                <input type="text"
                    placeholder="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <p>{formError.email}</p>

                <br />


                <input type="text"
                    placeholder="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                <p>{formError.password}</p>


                <select name="userSelect" id="" value={formValues.userSelect} onChange={handleChange}>
                    <option value="">Please select</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Pakistan">Canada</option>
                </select>
                <p>{formError.userSelect}</p>
                <br />


                <button>Submit</button>
            </form>
        </>
    );
}

export default Validation;