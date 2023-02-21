import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import add from '../img/upload.png';
import { auth, app, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';


const Register = () => {

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