import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <div>
            
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <h6>About</h6>
            <p className="text-justify">Spacestagram.com <i>SPACE KNOWELDGE WANTS TO BE SIMPLE </i> is an initiative  to help the people in Space Science Subject. Spacestagram focuses on providing the most clear pictures as well as well concise documented information(Not more than 150 words). We will help people to get updated their knowledge in space subject. </p>
          </div>

         

         
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022-23| All Rights Reserved by 
         <a href="/"> Spacestagram</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="/"><img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-f.png" alt=''/></a></li>
              <li><a className="twitter" href="/"><img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v2.png" alt=''/></a></li>
              <li><a className="dribbble" href="/"><img src="https://img.icons8.com/ios/30/000000/twitter--v1.png" alt=''/></a></li>
              
            </ul>
          </div>
        </div>
      </div>
</footer>
        </div>
    )
}

export default Footer
