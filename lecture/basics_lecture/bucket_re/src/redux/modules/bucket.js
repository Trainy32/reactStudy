// bucket.js
import {db} from '../../firebase'
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const LOAD = "bucket/LOAD"
const CREATE = "bucket/CREATE"
const DELETE = "bucket/DELETE"
const UPDATE = "bucket/UPDATE"

export function loadBucket (bucket_list) {
  return { type:LOAD, bucket_list }
}

export function createBucket( bucket_data ) {
  return { type:CREATE, bucket_data }
}

export function deleteBucket( bucket_index ) {
  return { type:DELETE, bucket_index }
}

export function updateBucket( bucket_index ) {
  return { type:UPDATE, bucket_index }
}


// middlewares
export const loadBucketFB = () => {
  return async function (dispatch) {
    const bucket_data = await getDocs(collection(db,'bucket'))

    let bucket_list = []

    bucket_data.forEach((doc) => {
      bucket_list.push({id:doc.id,...doc.data()})
    } )

    dispatch(loadBucket(bucket_list) )
  }
}

export const addBucketFB = (bucket) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, 'bucket'), bucket);
    // const _bucket = await getDoc(docRef);
    // const bucket_data = {id:_bucket.id, ..._bucket.data()}
    const bucket_data = {id: docRef.id, ...bucket}

    console.log((await getDoc(docRef)).data(), (await getDoc(docRef)).id)
    console.log (bucket_data)

    dispatch(createBucket(bucket_data))
  }
}

export const updateBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    console.log(bucket_id)
      const docRef = doc(db, 'bucket', bucket_id)
      await updateDoc(docRef, {completed:true});

    const _bucket_list = getState().bucket.list
    const bucket_index = _bucket_list.findIndex((doc) => {
      return doc.id === bucket_id })

      console.log (bucket_index)
      dispatch(updateBucket(bucket_index))
  }
}


export const deleteBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    if(!bucket_id) {
      window.alet('ID가 없네요!')
      return;
    } 
      const docRef = doc(db, 'bucket', bucket_id)
      await deleteDoc(docRef);

    const _bucket_list = getState().bucket.list
    const bucket_index = _bucket_list.findIndex((doc) => {
      return doc.id === bucket_id })

      dispatch(deleteBucket(bucket_index))
  }
}



const initialState = {
  list: [
    {bucket_text:'복습하기', completed: false},
    {bucket_text:'리덕스 연결하기', completed: false},
    {bucket_text:'파이어베이스 연결하기', completed: false},
  ] }

export default function reducer ( state = initialState, action = {} ) {
  switch (action.type) {
    case 'bucket/LOAD': {
      return { list : action.bucket_list };
    }
    case 'bucket/CREATE': {
      const new_bucket_list = [...state.list, action.bucket_data];
      return { list : new_bucket_list };
    }
    case 'bucket/DELETE' : {
      const new_bucket_list = state.list.filter( (e, i) => parseInt(action.bucket_index) !== i );
      console.log ('삭제할거야! ', action.bucket_index, 'in', state.list.length )
      return { list : new_bucket_list };
    }
    case 'bucket/UPDATE' : {
      const new_bucket_list = state.list.map((e,i) => 
        (parseInt(action.bucket_index) === i ? {...e, completed: true} : e))
      return { list : new_bucket_list };
    }
    default : return state; 
  }
}


