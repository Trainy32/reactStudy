import { useParams, useNavigate } from 'react-router-dom'

const Cat = () => {
  const params = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <h1>[ {params.name} ] 고양이화면이에뇽</h1>
      <button onClick={() => {
        navigate('/')
      }}> 메인 페이지 가기</button>
    </div>
  )

}


export default Cat