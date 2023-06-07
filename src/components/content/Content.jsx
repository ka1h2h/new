import "./Content.css";

export const Content = () => {
  return (
    <>
      <div className="cardPayment_content">
        <div className="cardPayment_cashReceipt">
          <div className="cardPayment_cashReceipt-slot">
            <div className="cardPayment_cashReceipt-slotContent1"></div>
            <div className="cardPayment_cashReceipt-slotContent2"></div>
          </div>
          <div className="cardPayment_cashReceipt-contentStartPaper"></div>
          <div className="cardPayment_cashReceipt-content">
            <div className="cardPayment_cashReceipt-contentText"></div>
            <h3 className="cardPayment_cashReceipt-title">Стоимость покупок</h3>
            <div className="cardPayment_cashReceipt-price">
              820,
              <p className="cardPayment_cashReceipt-priceLetter">95</p> ₽
            </div>
            <p className="cardPayment_cashReceipt-description">
              Приложите <br />
              или прокатайте карту
            </p>
          </div>
        </div>
      </div>
      <div className="cardPayment_btn-container">
        <div className="cardPayment_btn-arrow">
          <svg
            className="btnArrow"
            width="258"
            height="293"
            viewBox="0 0 258 293"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd_0_458)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M207 60.3203C207 55.902 203.418 52.3203 199 52.3203H58.9995C54.5812 52.3203 50.9995 55.902 50.9995 60.3203V149.025C50.9995 153.443 47.4178 157.025 42.9995 157.025H28.0498C20.8619 157.025 17.3207 165.768 22.4823 170.77L123.432 268.603C126.535 271.61 131.465 271.61 134.567 268.603L235.517 170.77C240.679 165.768 237.138 157.025 229.95 157.025H215C210.581 157.025 207 153.443 207 149.025V60.3203Z"
                fill="#1E8737"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_0_458"
                x="0.0336914"
                y="34.3203"
                width="257.932"
                height="258.538"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="10" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.203922 0 0 0 0 0.203922 0 0 0 0 0.243137 0 0 0 0.16 0"
                />
                <feBlend
                  mode="multiply"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_458"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.203922 0 0 0 0 0.203922 0 0 0 0 0.243137 0 0 0 0.4 0"
                />
                <feBlend
                  mode="multiply"
                  in2="effect1_dropShadow_0_458"
                  result="effect2_dropShadow_0_458"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_0_458"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};
