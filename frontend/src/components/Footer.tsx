const Footer = () => {
  return (
    <>
      <section className="py-0" id="defaultCta3">
        <div className="container">
          <div className="row flex-center bg-dark rounded py-6 text-center">
            <div className="col-lg-8 text-lg-start ps-lg-5">
              <h3 className="mb-2 text-white">
                built for fun debates & honest opinions.
              </h3>

              <p className="mb-0 text-white">
                This is a fun side project — but I also build scalable,
                production-ready applications. If you have a project idea or
                want to collaborate on something serious, let’s talk.
              </p>
              <hr />
              <p className="mb-2 text-white small">
                Made with 💖 by{" "}
                <strong className="text-white">Ayush Niraula</strong>
              </p>
            </div>

            <div className="col-lg-auto pe-lg-5 mt-4 mt-lg-0 text-lg-end">
              <span className="d-block text-secondary small mb-2"></span>

              <div className="d-flex gap-2 justify-content-center justify-content-lg-end">
                <a href="#!" className="btn btn-outline-light btn-sm">
                  let’s chat
                </a>

                <a href="#!" className="btn btn-outline-light btn-sm">
                  view CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
