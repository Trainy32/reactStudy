import React from "react";
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBucketFB, updateBucketFB } from './redux/modules/bucket'

const Detail = (props) => {
  const my_lists = useSelector( (state) => state.bucket.list );
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const bucket_index = params.index

  const deleteBtn = () => {
    dispatch(deleteBucketFB(my_lists[bucket_index].id))
    history.goBack()
  }

  const updateBtn = () => {
    dispatch(updateBucketFB(my_lists[bucket_index].id))
    history.push('/')
  }


  return (
    <>
      <h2>{my_lists[bucket_index] ? my_lists[bucket_index].bucket_text : ''}</h2>
      <button onClick={updateBtn}> 완료하기 </button>
      <button onClick={deleteBtn}> 삭제하기 </button>
    </>
  )
}

export default Detail;