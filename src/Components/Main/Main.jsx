import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../Assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <img src={assets.gemini} alt="" />
        <img src={assets.user} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest me beautiful places to see on an upcoming road trip
                </p>
                <img src={assets.compass} alt="" />
              </div>
              <div className="card">
                <p>Compare the difference between http and https.</p>
                <img src={assets.bulb} alt="" />
              </div>
              <div className="card">
                <p>Write me a SEO-Friendly description for my YouTube video.</p>
                <img src={assets.message} alt="" />
              </div>
              <div className="card">
                <p>How to write "Hello World!" in C++?</p>
                <img src={assets.code} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_logo} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              id="input"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery} alt="" />
              <img src={assets.mic} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
