import { useEffect, useState } from "react";
import axios from "axios";

const Vote = () => {
  const imageArray = ["01", "02", "03", "04"];

  const [questions, setQuestions] = useState<any>();

  const [clickedAnswer, setClickedAnswer] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("test");
      return saved ? JSON.parse(saved) : [];
    } catch {
      localStorage.removeItem("test");
      return [];
    }
  });

  useEffect(() => {
    getAllQuestions();
  }, []);

  const getAllQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:6969/verdict/");
      setQuestions(response?.data);
      console.log(questions);
      return response;
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(clickedAnswer));
  }, [clickedAnswer]);

  const answerClicked = (id: any) => {
    if (clickedAnswer.includes(id)) return;
    setClickedAnswer((prev: any) => {
      return [...prev, id];
    });
  };
  return (
    <>
      <section id="defaultProcess">
        <div className="container">
          <div className="row justify-content-center text-center mb-6">
            <div className="col-lg-6">
              <h2 className="fs-6 fs-sm-5 text-decoration-underline mb-3">
                Cast your vote
              </h2>
              <p className="text-body-tertiary fst-italic">
                Start by casting your vote and see what the majority of internet
                has decided. Or simply <a href="">click here</a> and ask your
                own questions
              </p>
            </div>
          </div>

          <div className="row">
            {questions?.data?.map((item: any, index: any) => {
              const totalVotes = item.voteCountOne + item.voteCountTwo || 1;

              return (
                <div className="col-12 ps-lg-7 " key={index}>
                  <div className="row align-items-center">
                    <div
                      className={`col-lg-6 text-center py-4 py-lg-8 ${
                        index % 2 === 0
                          ? "order-lg-2 border-start-lg"
                          : "border-end-lg"
                      }`}
                    >
                      <img
                        className="img-fluid"
                        src={`https://prium.github.io/twbs-sparrow/v2.5.0/assets/img/illustration/process-${
                          imageArray[
                            Math.floor(Math.random() * imageArray.length)
                          ]
                        }.svg`}
                        alt=""
                        width="360"
                      />
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">
                      <div className="process-item ms-lg-6">
                        <span className="process-item-number">
                          {index < 9 ? `0${index + 1}` : index + 1}
                        </span>

                        <h2 className="mt-2 mb-2">{item.question}</h2>

                        <p className="text-muted small mb-4">
                          <i className="bi bi-people me-1"></i>
                          {totalVotes} votes
                          <span className="mx-2">•</span>
                          <i className="bi bi-clock me-1"></i>
                          {new Date(item.updatedAt).toLocaleDateString()}
                        </p>

                        <div className="d-flex flex-column gap-3 mb-4">
                          <button
                            onClick={() => answerClicked(item?._id)}
                            disabled={
                              localStorage
                                .getItem("test")
                                ?.includes(item?._id) ||
                              clickedAnswer.includes?.(item?._id)
                            }
                            className="btn btn-outline-dark w-100"
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr auto",
                              alignItems: "center",
                            }}
                          >
                            <span className="text-start text-wrap">
                              {item.optionOne}
                            </span>
                            <span className="fw-semibold">
                              {Math.round(
                                (item.voteCountOne / totalVotes) * 100
                              )}
                              %
                            </span>
                          </button>

                          <button
                            onClick={() => answerClicked(item?._id)}
                            disabled={
                              localStorage
                                .getItem("test")
                                ?.includes(item?._id) ||
                              clickedAnswer.includes?.(item?._id)
                            }
                            className="btn btn-outline-dark w-100"
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr auto",
                              alignItems: "center",
                            }}
                          >
                            <span className="text-start text-wrap">
                              {item.optionTwo}
                            </span>
                            <span className="fw-semibold">
                              {Math.round(
                                (item.voteCountTwo / totalVotes) * 100
                              )}
                              %
                            </span>
                          </button>
                        </div>

                        <div
                          className="progress rounded-pill"
                          style={{ height: "8px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{
                              width: `${
                                (item.voteCountOne / totalVotes) * 100
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Vote;
