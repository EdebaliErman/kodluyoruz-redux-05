import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fecthProductsId, selectDetail, selectStatus } from '../../redux/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"
function Detail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const status = useSelector(selectStatus)
    const detail = useSelector(selectDetail)
    useEffect(() => {
        dispatch(fecthProductsId(id))
    }, [dispatch, id])

    if (status === "loading") {
        return "loading"
    }
    if (status === "error") {
        return "error"
    }
    return (
        <div className='detail'>
           
            <div className='detail-card'>
            <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
            </svg></Link>
                <h1>
                    {detail.productName}
                </h1>
                <div className='detail-profile'>
                    <img src={detail.image} alt={detail.image} />
                    <h1>
                        Just for sale ${detail.productPrice}
                    </h1>
                </div>
                <div className='detail-about'>
                    <h3>
                        {detail.productName}
                    </h3>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>
            </div>
        </div>
    )
}

export default Detail
