import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="cardPayment__footer">
      <div className="cardPayment__footerContainer">
        <div className="cardPayment__footerContainer-btnContainer">
          <button className="cardPayment__btnContainer-btnGoBack">
            <svg
              className="svg-footer-hover"
              width="20"
              height="30"
              viewBox="0 0 20 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="svg-footer-hover"
                x="0.500519"
                y="15.0001"
                width="21.2133"
                height="5.30333"
                rx="2.65167"
                transform="rotate(-45 0.500519 15.0001)"
                fill="#34343E"
              />
              <path
                className="svg-footer-hover"
                d="M2.37502 13.1249C3.41056 12.0893 5.0895 12.0893 6.12504 13.1249L17.3751 24.375C18.4106 25.4105 18.4106 27.0894 17.3751 28.125V28.125C16.3396 29.1605 14.6606 29.1605 13.6251 28.125L2.37502 16.8749C1.33948 15.8394 1.33948 14.1604 2.37502 13.1249V13.1249Z"
                fill="#34343E"
              />
            </svg>
          </button>
          <div className="cardPayment__btnContainer-callToCustomerContainer">
            <button className="cardPayment__btnContainer-callToCustomer">
              <svg
                className="svg-footer-hover"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="svg-footer-hover"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.5763 26.442L29.2513 43.3088C29.2513 43.3088 26.2522 44.3066 26.0494 41.743C25.8692 39.4671 24.4864 29.916 24.4864 29.916L23.4193 29.8516C23.4193 29.8516 22.4071 38.6412 21.9781 41.5286C21.5542 44.3805 18.5938 43.2001 18.5938 43.2001L19.5776 26.3583C19.5776 26.3583 16.0139 23.4871 16.5562 20.9821C17.033 18.7805 17.6868 14.9528 17.6868 14.9528C18.5781 14.031 20.0917 13.4263 21.799 13.1464L24.1151 16.5746L26.425 13.1688C28.0486 13.4513 29.5155 14.0326 30.4652 14.9262C30.4652 14.9262 31.0119 18.8604 31.4588 21.051C31.905 23.2413 28.5763 26.442 28.5763 26.442ZM20.9786 7.74228C20.9786 2.96066 27.6335 3.80815 27.1186 8.06416C26.6227 12.1592 20.9786 12.5852 20.9786 7.74228Z"
                  fill="#34343E"
                />
              </svg>
              Вызов сотрудника
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
