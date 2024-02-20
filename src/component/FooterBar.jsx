import React from 'react';


const FooterBar = () => {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#373434' }}>
      <div className="container p-4">
        {/* Section: Social media */}
        <section className="mb-4 d-flex justify-content-center">
          {/* Social media buttons */}
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button"><i className="fab fa-twitter"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button"><i className="fab fa-google"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button"><i className="fab fa-instagram"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button"><i className="fab fa-github"></i></a>
        </section>
        {/* Section: Social media */}

        {/* Section: Form */}
        <section className="mb-4">
          <form>
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example2" className="form-control" />
                  <label className="form-label" htmlFor="form5Example2">Email address</label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">Subscribe</button>
              </div>
            </div>
          </form>
        </section>
        {/* Section: Form */}

        {/* Section: Description */}
        <section className="mb-4">
          <p>
            


Our team of dedicated journalists works tirelessly to deliver high-quality news articles, analysis, and insights to keep you informed and engaged. Whether you're looking for breaking news, in-depth features, or thought-provoking opinion pieces, you'll find it all here at NewsTrust.

Stay connected with us through our social media channels to get the latest updates, engage with our community, and share your thoughts on the stories that matter to you. Don't forget to sign up for our newsletter to receive curated news highlights directly in your inbox.

<br />Thank you for choosing NewsTrust as your trusted source for news. We appreciate your support and look forward to keeping you informed and inspired.


          </p>
        </section>
        {/* Section: Description */}

        {/* Section: Links */}
       

        {/* Footer text */}
        <div className="text-center p-3 text-black" style={{ backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
    fontWeight: 'bold' }}>
          © 2020 Copyright:
          <a 
  className="mx-2 text-danger"  
  style={{ textDecoration: 'none', color: 'red',  }} 
  href="https://sachiya2000.github.io/"
  
>
  Sachitha Madhuranga
</a>

        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
