import React, {useState, useEffect} from 'react'
import '../styles/marketing.css' 
import { useNavigate } from 'react-router-dom'

const media = [
    {'id':1, 'name':'TV'},
    {'id':2, 'name':'Radio'},
    {'id':3, 'name':'Social media'},
    {'id':4, 'name':'Internet'},
]
const  setalert = () => alert('waleed osman')

const Marketing = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  useEffect(() => {console.log('Here we go to set ', {text1}, ' and ', {text2})}, [text1]);
  useEffect(() => {console.log('Number 2 ',{text2})}, [text2]);
  const navigate = useNavigate()
  return (
    <div className='max-w-100wh'>
        <h2>Marketing</h2>
        <div className='d-flex w-100'>            
            {media.map((media) => (
                    <div className='card p-4 m-2 w-auto' key={media.id}>
                      <a href="#" className='text-decoration-none' onClick={setalert}><h5 className='text-secondary'>{media.name}</h5></a>
                    </div>
            ))}
        </div>

        <div><a   onClick={()=> {navigate('../customers')}} className='text-decoration-none'>Television</a></div>

        <hr/>
        <input type="text" placeholder='Enter Text 1' className='p-2 w-75' onChange={(e)=> setText1(e.target.value)} />
        <p>here we set {text1}</p>
        <hr/>
        <input type="text" placeholder='Enter Text 2' className='p-2 w-75' onChange={(e)=> setText2(e.target.value)} />
        <p>here we set {text2}</p>

    </div>
  )
}
export default Marketing
