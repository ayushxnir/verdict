
const Information = () => {
  return (
    <>
      <section id="defaultServices">
        <div className="container">
          <div className="row justify-content-center gy-4 gx-lg-4">
            <div className="col-12 mb-3 mb-md-5 text-center">
              <h2 className="fs-6 fs-sm-5">
                <span className="text-decoration-underline">
                  arguments, but make it fun.
                </span>
              </h2>
              <p className="mt-3 text-muted">
                Because some debates deserve a verdict — not a group chat war.
              </p>
            </div>

            {[
              [
                "🔥",
                "icon-coding.svg",
                "Hot takes only",
                "No boring polls here. Every question is designed to make you pause, laugh, and think “okay… but WHY is this so hard to choose?”",
              ],
              [
                "⚔️",
                "icon-target.svg",
                "One choice. No backing out.",
                "You can’t pick both. You can’t stay neutral. Choose a side and live with the consequences.",
              ],
              [
                "😂",
                "favorites-button.svg",
                "Ridiculously relatable",
                "From food debates to life decisions — these questions feel uncomfortably close to home.",
              ],
              [
                "📊",
                "icon-line-chart.svg",
                "See what the world thinks",
                "The verdict is instant. Watch opinions stack up and realize how wrong (or right) everyone else is.",
              ],
              [
                "🧠",
                "multi-purpose.svg",
                "Built to spark conversations",
                "Perfect for friends, couples, group chats, or starting chaos at 2 AM.",
              ],
              [
                "🚀",
                "icon-coding.svg",
                "Fast, smooth, addictive",
                "No clutter. No distractions. Just questions, choices, and the sweet satisfaction of picking a side.",
              ],
            ].map((item, i) => (
              <div className="col-lg-5" key={i}>
                <div className="d-flex flex-column flex-sm-row align-items-start">
                  <img
                    className="me-sm-4 mb-3 mb-sm-0"
                    src={`https://prium.github.io/twbs-sparrow/v2.5.0/assets/img/icons/${item[1]}`}
                    width="50"
                    alt=""
                  />
                  <div>
                    <h4 className="mb-2">
                      {item[0]} {item[2]}
                    </h4>
                    <p className="mb-0 text-muted">{item[3]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
