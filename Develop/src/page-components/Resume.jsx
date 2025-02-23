import '../styles/PagesStyle.css';

export default function Resume() {
    return (
        <div>
          <h1 className="h1">Resume</h1>
          <p className="main-para">
        <a className="resume" href='/img/D.Panepucci-RN.jpg'>Click to view resume.</a>
          </p>

          <p className='skills'>Clinical Skills:</p>
            <li>Epic EMR SuperUser</li>
            <li>Supervisor RN</li>
            <li>Provide NEO Training for RN and CNA</li>
          <p className='skills'>Technical Skills:</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>SQL/Postgres</li>
        </div>
      );
    }