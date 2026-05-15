import iconHtml from '../assets/legacy/img_html.svg'
import iconCss from '../assets/legacy/img_css.png'
import iconJs from '../assets/legacy/img_js.png'

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="sub_title">Skills</h2>
      <p className="attention">※実務経験はありません</p>
      <div className="container">
        <div className="skill_list">
          <div className="skill">
            <img src={iconHtml} alt="HTML" />
          </div>
          <div className="skill">
            <img src={iconCss} alt="CSS" />
          </div>
          <div className="skill">
            <img src={iconJs} alt="JavaScript" className="img_js" />
          </div>
        </div>
        <div className="skill_text">
          <p>
            <strong>HTML&CSS</strong>
            <br />
            ・Webアプリ開発
            <br />
            ・レスポンシブデザイン
          </p>
          <p>
            <strong>JavaScript</strong>
            <br />
            ・Webアプリ開発
          </p>
        </div>
      </div>
    </section>
  )
}
