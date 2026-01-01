const Header = () => {
  return (
    <>
      <section className="py-0">
        <div className="container-fluid">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 px-0 order-2 order-lg-1 text-center">
              <img
                src="/ver.png"
                alt=""
                className="img-fluid"
                style={{ maxHeight: "600px" }}
              />
            </div>

            <div className="col-lg-6 bg-body py-7 py-md-8 order-1 order-lg-2">
              <div className="row flex-center h-100">
                <div className="col-lg-10 text-black text-center text-lg-start">
                  <h4 className="fw-normal ls text-white bg-dark p-1 rounded d-inline-block">
                    Internet Decides The Final...
                  </h4>

                  <h1 className="display-3 fs-4 fs-sm-3 mt-3">
                    <span className="text-decoration-underline">Verdict</span>
                  </h1>

                  <h2 className="fw-light">Settle it once and for all...</h2>

                  <p className="text-body-highlight fs-9 mt-3 mt-md-5">
                    Can’t agree with your friends ?
                    <br />
                    Drop the question.
                    <br />
                    Let the crowd vote.
                    <br />
                    The majority decides the final verdict.
                  </p>

                  <a className="btn btn-outline-dark btn-sm mt-3" href="#!">
                    Enter the Courtroom ⚖️
                  </a>

                  <h6 className="fw-bold mt-4 text-uppercase">
                    Made With 💖 && 🍵 By{" "}
                    <a href="" className="text-dark text-decoration-underline">
                      @ayushniraula
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
