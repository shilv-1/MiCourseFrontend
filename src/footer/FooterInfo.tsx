
export default function FooterInfo() {

  return (
    <>
      <div className="footer-info">
        <p>
          <a href="http://www.nju.edu.cn">南大首页</a>
          <a href="http://jw.nju.edu.cn">南大教务</a>
          <a role="button" href="#" data-toggle="modal" data-target="#modal-feedback">意见反馈</a>
          <a className="special-link" href="/sorter/">米课分一分^ ^</a>
        </p>
        <p>Designed & developed by CPC, Hane, ZingSS, SuperLatte, Christine & Polaris.</p>
        <p>Copyright &copy; Lily Studio, 2015-2018</p>
      </div>
      {/*language=CSS*/}
      <style jsx>{`

        .footer-info {
          font-size: .75rem;
          text-align: center;
          line-height: 1.125rem;
          padding: 0 15px 0 15px;
        }

        .footer-info a {
          color: #7d7d7d;
          text-decoration: none;
          cursor: pointer;
          margin: 0 2px 0 2px;
        }

        .footer-info p {
          margin: 0;
        }

      `}
      </style>
    </>
  );

}
