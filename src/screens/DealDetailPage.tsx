import React, { useState } from "react";
import "./DealDetailPage.scss";
import UserDummyIcon from "@images/UserDummy.svg";
import EmptyHeart from "@images/ArticleEmptyHeart.svg";
import KakaoMap from "@images/kakao_map.png";
import EditIcon from "@images/EditIcon.svg";

function DealDetailPage() {
  const [test] = useState(true);
  const [dealState, setDealState] = useState(0);
  const changeDealState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDealState(parseInt(e.target.value, 10));
  };

  const changeColor = (state: number) => {
    if (state === 0) {
      return "green";
    }
    if (state === 1) {
      return "yellow";
    }
    return "brown";
  };

  return (
    <div id="deal-detail-page">
      <div className="article flex column">
        <p className="title notoMid">πμΌμ± μ€λμΈμ΄ κΏλ ν©λλ€~</p>
        <div className="header flex">
          <div className="header-info flex">
            <div className="header-info__img-container flex">
              <img src={UserDummyIcon} alt="dum" title="user-icon" />
            </div>
            <div className="header-info__text flex column">
              <p className="user-name notoMid">username</p>
              <p className="created notoReg">3μκ° μ </p>
            </div>
            <button className="header-info__btn notoReg" type="button">
              νλ‘μ°
            </button>
          </div>
          <div className="header-func flex">
            {test ? (
              <div className="header-func-box flex">
                <select
                  className={`header-func-box__select notoReg ${changeColor(
                    dealState
                  )}`}
                  onChange={e => {
                    changeDealState(e);
                  }}
                  value={dealState}
                >
                  <option value="0">κ±°λ λκΈ°</option>
                  <option value="1">κ±°λ μ§ν</option>
                  <option value="2">κ±°λ μλ£</option>
                </select>
                <img src={EditIcon} alt="edit" title="edit" />
              </div>
            ) : (
              <div className="header-func-btn flex">
                <img src={KakaoMap} alt="123" title="map" />
                <img src={EmptyHeart} alt="123" title="like" />
              </div>
            )}
          </div>
        </div>
        <div className="body"> </div>
        <div className="comment flex column">
          <div className="comment-head">
            <p className="notoMid">
              λκΈ<span className="">123</span>
            </p>
          </div>
          <div className="comment-input flex">
            <div className="input-img-container flex">
              <img src={UserDummyIcon} alt="dum" title="user-icon" />
            </div>
            <input type="text" placeholder="λκΈμ μλ ₯ν΄" />
          </div>
          <div className="comment-component"> </div>
        </div>
      </div>
    </div>
  );
}

export default DealDetailPage;
