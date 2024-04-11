function Footer() {
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"><use  xlinkHref="#bootstrap"></use></svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2023 Company, Inc</span>
        </div>
    
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="fa-brands fa-facebook"><a className="text-muted" href="https://www.facebook.com/"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
          <li className="fa-brands fa-x-twitter"><a className="text-muted" href="https://twitter.com/"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
          <li className="fa-brands fa-instagram"><a className="text-muted" href="https://www.instagram.com/"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
        </ul>
      </footer>  
    );
}

export default Footer;