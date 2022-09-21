import React from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './shared/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { db, storage } from './shared/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import {useNavigate} from 'react-router-dom'

const SignUp = (props) => {
  const navigate = useNavigate()
  const id_ref = React.useRef(null)
  const name_ref = React.useRef(null)
  const pw_ref = React.useRef(null)
  const file_link_ref = React.useRef(null)

  const uploadFb = async (e) => {
    console.log(e.target.files)

    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0])

    console.log(uploaded_file)

    const file_url = await getDownloadURL(uploaded_file.ref)
    console.log(file_url)

    file_link_ref.current = { url: file_url }

  }



  const signupFB = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value);

    const user_doc = await addDoc(collection(db, 'users'), {
      user_id: user.user.email,
      name: name_ref.current?.value,
      image_url: file_link_ref.current?.url
    })
    console.log(user_doc.id);

    navigate('/')
  }

  return (
    <div>
      아이디(이메일) : <input ref={id_ref} type='text' /><br />
      이름 <input ref={name_ref} type='text' /><br />
      비밀번호 : <input ref={pw_ref} type='password' /><br />
      이미지 파일 : <input type='file' onChange={uploadFb} /><br />
      <button onClick={() => { signupFB() }}>회원가입</button>
    </div>
  )
}

export default SignUp