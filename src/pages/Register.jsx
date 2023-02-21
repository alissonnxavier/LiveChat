import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import add from '../img/upload.png';
import { auth,  storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [ useErr, setError ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].value;

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    setError(true);
                },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        console.log('File available at', downloadURL);

                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });

                        await setDoc(doc(db, 'users', res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        });

                        await setDoc(doc(db, 'userChats', res.user.uid), {});
                        navigate("/");
                    });
                }
            );



        } catch (useErr) {
            console.log(useErr);

        }
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"> Lama chat </span>
                <span className="title"> Register </span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="display name" />
                    <input type='email' placeholder="email" />
                    <input type='password' placeholder="password" />
                    <input type='file' id="file" style={{ display: 'none' }} />
                    <label htmlFor="file">
                        { useErr && <span> Something were wrong </span> }
                        <img className="imgUpload" src={add}></img>

                        Add an Avatar
                    </label>
                    <button> Sign up </button>
                </form>

                <p> You do have an account? Login</p>

            </div>

        </div>
    )
}

export default Register;