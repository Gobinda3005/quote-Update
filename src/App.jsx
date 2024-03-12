import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Toast from './Toast'



function App ()
{
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState('')
  const [btnClick,setbtnClick]=useState(0)
  useEffect(() =>
  {
    axios.get("https://api.quotable.io/random")
      .then((data) =>
      {
        setQuote(data.data.content);
        setAuthor(data.data.author)
    })
  },[btnClick])
  // function updateQuote ()
  // {
  //   setInterval(() =>
  //   {
  //     setbtnClick(btnClick+1)
  //   },5000)
  // }
  // updateQuote();
  return (
    <>
    <Toast />
        {/* <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <img src="..." className="rounded me-2" alt="..." />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-body-secondary">11 mins ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
               <div className="toast-body">
                  Now this is save to your Bookmark file
               </div>
        </div> */}
        <br />
        <br />
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
    <div className="quotation">
        <blockquote>{quote}</blockquote>
        <cite>-{author}</cite><br />
        <button onClick={()=>setbtnClick(btnClick+1)}><i className="bi bi-bookmark-check"></i>Bookmark</button>
      </div>
    </div> 
    <br />
    <br />
    <br />
    <br />
    <div className="mt-5">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-4">
                      <div className="container-fluid m-0 p-0">
                        {/* <div className="social-links">
                            <a href="#">
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </div>
                        <div className="social-links">
                            <a href="#">
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </div> */}
                        <h5 className="text-white me-auto ms-auto"><i className="bi bi-pen"></i> BirthFor<span className="text-warning">Wtite</span></h5>
                        <h5 className="text-white me-auto ms-auto"><i className="bi bi-pen"></i> BirthFor<span className="text-warning">Write</span></h5>
                        <h5 className="text-white me-auto ms-auto"><i className="bi bi-pen"></i> BirthFor<span className="text-warning">Write</span></h5>
                        <h5 className="text-white me-auto ms-auto"><i className="bi bi-pen"></i> BirthFor<span className="text-warning">Write</span></h5>
                        {/* <div className="social-links">
                            <br />
                            <br />
                            <a href="#">
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </div><div className="social-links">
                            <a href="#">
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </div> */}
                      </div>
                    </nav>
                </div>
            </div>
    </>
    
  )
}

export default App